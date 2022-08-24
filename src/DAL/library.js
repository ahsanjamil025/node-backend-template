const { Library } = require("../models/library");

  const add_library = async (library_data) => {
    const new_library = new Library(library_data);
    return await new_library.save();
  };

  const find_library_name = async (body) => {
    return await Library.findOne({library_name: body.library_name});
  };

  const find_library_by_id = async (id) => {
    return await Library.findById(id);
  };

  const delet_library_by_id = async (id) => {
    return await Library.findByIdAndDelete(id);
  };

  const library_detail = async ()=> {
    return await Library.find();
  };

  const find_book_in_library = async (library_id)=> {
    return await Library.find({_id:library_id}).select("book");
  };

  module.exports = {
    add_library,
    find_library_by_id,
    delet_library_by_id,
    library_detail,
    find_library_name,
    find_book_in_library
  };