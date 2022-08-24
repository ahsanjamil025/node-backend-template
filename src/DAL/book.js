const { Book } = require("../models/books");


const add_book = async (book_data) => {
    const new_book = new Book(book_data);
    return await new_book.save();
  };

const find_book_by_id = async (id) => {
    return await Book.findOne({ _id: id });
  };


  const find_book_by_name_and_volume = async (body) => {
    return await Book.find({
      $and:[
        {book_name: body.book_name},
        {book_volume:body.book_volume}
      ]
    });
  };

  const find_book_by_code = async (body) => {
    return await Book.findOne({ book_code: body.book_code });
  };

  const delete_book_by_id = async (body_id) => {
    return await Book.findByIdAndDelete({ _id:body_id });
  };

  const get_all_books = async () => {
    return await Book.find();
  };

module.exports ={
    add_book,
    find_book_by_id,
    find_book_by_name_and_volume,
    find_book_by_code,
    delete_book_by_id,
    get_all_books,
}