const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
    user: String,
    book: {type:mongoose.Schema.Types.ObjectId, ref:'Book'},
    review: String,
    date: Date,
    rating: Number,
});

const ReviewModel = mongoose.model('Review', ReviewSchema);

module.exports = ReviewModel;