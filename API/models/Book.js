const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,  
    author: {type:mongoose.Schema.Types.ObjectId, ref:'User'},
    authorReal: String,   
    description: String,
    cover: String,
    genre: String,   
    numberOfPages: Number,
    averageRating: Number,
    rating: Number,
    publishedDate: Date,
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;