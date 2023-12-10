const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
}));

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,   })   
.then(() => console.log("Database connected!"))
.catch(err => console.log(err));

app.get('/test', (req, res) => {
    res.json('Hello Wo')
});

app.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const user = await User.create({ firstName, lastName, email, password: bcrypt.hashSync(password, 10) });
    res.json(user);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000')
});

//AzQJlX9Mrs8pJ4Ul 
