const {
    add_book,
    find_book_by_id,
    find_book_by_name_and_volume,
    find_book_by_code,
    delete_book_by_id,
    get_all_books,
} = require("../DAL/book");



const _newBook = async (body, resp) => {
    book_code = await find_book_by_code(body);
    if (book_code) {
        resp.error = true;
        resp.error_message = "With given code book is already exist.";
        return resp;
    }

    let book = await find_book_by_name_and_volume(body);
    
    if (book.length > 0) {
        // for (let i = 0; i < book_name.length; i++) {
        //            console.log(book_name[i].book_volume)
        // }
        resp.error = true;
        resp.error_message = "This book is already exist.";
        return resp
    }


    resp.data = await add_book(body);
    return resp;
};

const newBook = async (body) => {
    let resp = {
        error: false,
        auth: false,
        error_message: "",
        data: {},
    };

    resp = await _newBook(body, resp);
    return resp;
};


const _editbook = async (body, book_id, resp) => {
    book = await find_book_by_id(book_id);
    if (!book) {
        resp.error = true;
        resp.error_message = "This book is not exist.";
        return resp;
    }

    book.book_name = body.book_name;
    book.authore = body.authore;
    book.book_volume = body.book_volume;
    book.security = body.security;

    await book.save();
    resp.data = book;
    return resp;
};


const editbook = async (body, book_id) => {
    let resp = {
        error: false,
        auth: false,
        error_message: "",
        data: {},
    };

    resp = await _editbook(body,book_id, resp);
    return resp;
};

const _bookDetail = async (book_id, resp) => {
    book = await find_book_by_id(book_id);
    if (!book) {
        resp.error = true;
        resp.error_message = "This book is not exist.";
        return resp;
    }
    resp.data = book;
    return resp;
};


const bookDetail = async (book_id) => {
    let resp = {
        error: false,
        auth: false,
        error_message: "",
        data: {},
    };

    resp = await _bookDetail(book_id, resp);
    return resp;
};

const _bookDelete = async (book_id, resp) => {
    book = await find_book_by_id(book_id);
    if (!book) {
        resp.error = true;
        resp.error_message = "This book is not exist.";
        return resp;
    }

    deleted_book = await delete_book_by_id(book_id);
    return resp;
};

const bookDelete = async (book_id) => {
    let resp = {
        error: false,
        auth: false,
        error_message: "",
        data: {},
    };

    resp = await _bookDelete(book_id, resp);
    return resp;
};

const _booksList = async (resp) => {
    books = await get_all_books();
    if (!books) {
        resp.error = true;
        resp.error_message = "There is no book to exist.";
        return resp;
    }
    

    resp.data=books;
    return resp;
};


const booksList = async () => {
    let resp = {
        error: false,
        auth: false,
        error_message: "",
        data: {},
    };

    resp = await _booksList(resp);
    return resp;
};

module.exports = {
    newBook,
    editbook,
    bookDetail,
    bookDelete,
    booksList
}