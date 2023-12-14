const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProgressSchema = new Schema({
    user: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    book: {type:mongoose.Schema.Types.ObjectId, ref:'Book'},
    currentPage: Number,
    finished: Boolean,
    date: Date,
    cover: String,
    title: String,
    numberOfPages: Number,
});

const ProgressModel = mongoose.model('Progress', ProgressSchema);

module.exports = ProgressModel;