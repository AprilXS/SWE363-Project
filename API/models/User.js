const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,  // String is shorthand for {type: String}
    lastName: String,   // String is shorthand for {type: String}
    email: { type: String, unique: true },      // String is shorthand for {type: String}
    password: String,
    type: String,   // String is shorthand for {type: String}
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;