const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const _ = require("lodash");


const bookSchema = new mongoose.Schema({
  book_name: {
    type: String,
    minlength: 3,
    maxlength: 255,
    trim: true,
    unique: true,
  },
  total: {
    type: Number,
    min: 0,
    trim: true,
  },
  rented: {
    type: Number,
    default: 0,
    min: 0,
    trim: true,
  },
  available: {
    type: Number,
    min: 0,
    trim: true,
  },
   
});


const librarySchema = new mongoose.Schema({
  library_name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true,
    unique: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true,
  },
  post_code: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 255,
    trim: true,
  },
  date: {
    type: Date, 
    required: true,
    default: Date.now
  },  
  book:[bookSchema],
});

librarySchema.plugin(timestamps);

librarySchema.methods.toJSON = function () {
  const library = this;
  const libraryObject = library.toObject();
  const libraryJson = _.pick(libraryObject, [
    "_id",
    "library_name",
    "city",
    "address",
    "post_code",
    "date",
    "book",
    
  ]);
  return libraryJson;
};

const Library = mongoose.model("library", librarySchema);
exports.Library = Library;
