const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");
const Joi = require("joi");

const bookSchema = new mongoose.Schema({
  book_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    trim: true,
  },
  book_name: {
    type: String,
    required: true,
    trim: true,
  },
});

const assignSchema = new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      trim: true,
    },
    library_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "library",
      trim: true,
    },
    books: [bookSchema],
  });
  
assignSchema.plugin(timestamps);
  
assignSchema.methods.toJSON = function () {
    const assign_book = this;
    const assign_bookObject = assign_book.toObject();
    const assign_book_Json = _.pick(assign_bookObject, [
      "_id",
      "user_id",
      "library_id",
      "books",
      "createdAt",
      "updatedAt",
    ]);
    return assign_book_Json;
  };
  
  const assign_Book = mongoose.model("assign_book", assignSchema);
  exports.assign_Book = assign_Book;
  