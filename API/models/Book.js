const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,  
    auther: {type:mongoose.Schema.Types.ObjectId, ref:'User'},   
    description: String,
    image: String,
    type: String,   
    pages: Number,
    averageRating: Number,
    rating: Number,
    publishedDate: Date,
    // reviews: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Review',
    // }],
    // comments: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'Comment',
    // }],
    // users: [{
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    // }],
});

const BookModel = mongoose.model('Book', BookSchema);

module.exports = BookModel;