const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));
const jwtSecret = 'lkajshfdkajhfd;kafd;alskd';

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
}).then(() => console.log("Database connected!"))
    .catch(err => console.log(err));



// console.log(process.env.MONGO_URL);

app.get('/test', (req, res) => {
    res.json('Hello Wo')
});

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, type } = req.body;
    try {
        const userDoc = await User.create({
            firstName,
            lastName,
            email,
            password: bcrypt.hashSync(password, 10),
            type,
        });
        res.json(userDoc);
    } catch (err) {
        res.status(422).json(err);
    }
});

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const userDoc = await User.findOne({ email });
//     if (!userDoc) {
//         res.status(404).json({ message: 'User not found!' });
//     } else {
//         const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);
//         if (!isPasswordCorrect) {
//             res.status(401).json({ message: 'Incorrect password!' });
//         } else {
//             const token = jwt.sign({
//                 id: userDoc._id,
//                 firstName: userDoc.firstName,
//                 lastName: userDoc.lastName,
//                 email: userDoc.email,
//                 type: userDoc.type,
//             }, jwtSecret, { expiresIn: '1d' }, (err, token) => {
//                 if (err) {
//                     res.status(500).json(err);
//                 } else {
//             res.cookie('token', token).json(userDoc);
//                 }
//             });
//         }
//     }
// });

// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     const userDoc = await User.findOne({ email });

//     if (!userDoc) {
//         res.status(404).json({ message: 'User not found!' });
//     } else {
//         const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);

//         if (!isPasswordCorrect) {
//             res.status(401).json({ message: 'Incorrect password!' });
//         } else {
//             jwt.sign(
//                 {
//                     id: userDoc._id,
//                     firstName: userDoc.firstName,
//                     lastName: userDoc.lastName,
//                     email: userDoc.email,
//                     type: userDoc.type,
//                 },
//                 jwtSecret,
//                 { expiresIn: '1d' },
//                 (err, token) => {
//                     if (err) {
//                         res.status(500).json(err);
//                     } else {
//                         res.cookie('token', token).json(userDoc);
//                     }
//                 }
//             );
//         }
//     }
// });

app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userDoc = await User.findOne({ email });

        if (!userDoc) {
            return res.status(401).json({ message: 'Wrong email' });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, userDoc.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: 'Wrong password' });
        }

        const token = jwt.sign(
            {
                id: userDoc._id,
                email: userDoc.email,
                type: userDoc.type,
            },
            jwtSecret,
            { expiresIn: '1d' }
        );

        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'None' }).json(userDoc);
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});



app.get('/profile', (req, res) => {
    const { token } = req.cookies;
    if (token) {
        jwt.verify(token, jwtSecret, {}, (err, userData) => {
            if (err) res.status(401).send('Unauthorized');
            User.findById(userData.id).then((userDoc) => {
                const data = {
                    id: userDoc._id,
                    firstName: userDoc.firstName,
                    lastName: userDoc.lastName,
                    email: userDoc.email,
                    type: userDoc.type,
                };
                res.json(data);
            })
                .catch((err) => {
                    res.status(401).send('Unauthorized');
                });
        });
    } else {
        res.json(null);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

//AzQJlX9Mrs8pJ4Ul  
