const { find_library_by_id, find_book_in_library } = require("../DAL/library");

const { assign_books_to_new_customer, find_rented_book_by_user_id } = require("../DAL/assignbook");
const _assign_Book_to_customer = async (library_id, user, resp, books) => {
  let library = await find_library_by_id(library_id);
  if (!library) {
    resp.error = true;
    resp.error_message = "this library is not exist";
    return resp;
  }
  bookInLibrary = await find_book_in_library(library_id);
  libraryBook = bookInLibrary[0];
  let is_book = false
  let avaliable_book = [];
 
  for (let o = 0; o < books.book_name.length; o++) {
    for (let i = 0; i < libraryBook.book.length; i++) {
      let book = libraryBook.book[i];
      if (book.book_name == books.book_name[o]) {
        book_id=book._id;
        book_name=book.book_name;
        avaliable_book.push({ book_id,book_name})
        is_book = true;
        if (!(libraryBook.book[i].available > 0)) {
          resp.error = true;
          resp.error_message = book.book_name + " book is out of stock";
          return resp;
        }
        libraryBook.book[i].rented++;
        libraryBook.book[i].available -= 1;
      }
    }
    if (is_book == false) {
      resp.error = true;
      resp.error_message = books.book_name[o] + " book is not availabe in this library";
      return resp;
    }
    is_book = false
  }
  assigned_book_list = await assign_books_to_new_customer(user._id, library_id,  avaliable_book);
  libraryBook.save();
  resp.data = assigned_book_list;
  return resp;
};

const assign_Book_to_customer = async (library_id, user, books) => {
  let resp = {
    error: false,
    auth: true,
    error_message: "",
    data: {},
  };
  resp = await _assign_Book_to_customer(library_id, user, resp, books);
  return resp;
};

const _rented_Book_by_customer = async (user, resp) => {
  record = await find_rented_book_by_user_id(user)
  if (!record) {
    resp.error = true;
    resp.error_message = "You do not rented any book";
    return resp;
  }
  resp.data = record;
  return resp;
}

const rented_Book_by_customer = async (user) => {
  let resp = {
    error: false,
    auth: true,
    error_message: "",
    data: {},
  };
  resp = await _rented_Book_by_customer(user, resp);
  return resp;
};

module.exports = {
  assign_Book_to_customer,
  rented_Book_by_customer,
};