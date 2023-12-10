const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,  // String is shorthand for {type: String}
    lastName: String,   // String is shorthand for {type: String}
    email: { type: String, unique: true },      // String is shorthand for {type: String}
    password: String,   // String is shorthand for {type: String}
});

const User = mongoose.model('User', userSchema);

module.exports = User;