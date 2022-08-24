const { assign_Book } = require("../models/assignBook");

const assign_books_to_new_customer = async (user_id, library_id, books) => {
    const assigned_book = new assign_Book({ user_id:user_id, library_id:library_id, books:books });
    return await assigned_book .save();
};


const find_rented_book_by_user_id = async (user )=> {
    
    const assigned_books = await assign_Book.find({ user_id:user._id, }).populate("library_id", "library_name",);
    return await assigned_books;
};

module.exports = {
    assign_books_to_new_customer,
    find_rented_book_by_user_id,

};