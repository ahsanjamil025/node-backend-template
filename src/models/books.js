const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");


const bookSchema = new mongoose.Schema({
  
  book_code: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    unique:true,
    trim: true,
  },
  book_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  book_volume: {
    type: Number,
    required: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  authore: {
    type: String,
    trim: true,
  },
  security: {
    type: Number,
    trim: true,
    required: true,
  },
});

bookSchema.plugin(timestamps);
bookSchema.methods.toJSON = function () {
  const book = this;
  const bookObject = book.toObject();
  const bookJson = _.pick(bookObject, [
    "_id",
    "book_code",
    "book_name",
    "authore",
    "security",
    "book_volume",
    "createdAt",
    "updatedAt",
  ]);
  return bookJson;
};

const Book = mongoose.model("book", bookSchema);
exports.Book = Book;
