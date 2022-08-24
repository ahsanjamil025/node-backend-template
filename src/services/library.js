const { add_library, find_library_by_id,delet_library_by_id,library_detail,find_library_name,} = require("../DAL/library");
const { add_to_session } = require("../DAL/session");
  
//   new library
  const _newLibrary = async (body, resp) => {
    library = await find_library_name(body);
    if(library){
      resp.error = true;
      resp.error_message = "This library is already exist.";
      return resp;
    }
    resp.data = await add_library(body);
    return resp;
  };

  const newLibrary = async (body) => {
    let resp = {
      error: false,
      auth: false,
      error_message: "",
      data: {},
    };
  
    resp = await _newLibrary(body, resp);
    return resp;
  };

 //   edit action

 const _editLibrary = async (body, library_id,resp) => {
     const Library = await find_library_by_id(library_id);
    if (!Library) {
      resp.error = true;
      resp.error_message = "This library not found.";
      return resp;
    }
    
    // set new action value
    
    Library.library_name = body.library_name;
    Library.city = body.city;
    Library.address = body.address;
    Library.post_code = body.post_code;

    await Library.save();
    resp.data = Library;
    return resp;
  };

  const editLibray = async (body, library_id) => {
    let resp = {
      error: false,
      auth: false,
      error_message: "",
      data: {},
    };
    resp = await _editLibrary(body, library_id, resp);
    return resp;
  };



//   delete library
const _deletLibrary = async (library_id,resp) => {
    const Library = await find_library_by_id(library_id);
   if (!Library) {
     resp.error = true;
     resp.error_message = "This Library not found.";
     return resp;
   }
   
   // set new action value
   
   deletedLibrary =  delet_library_by_id(library_id);
   resp.data = deletedLibrary;
   return resp;
 };


  const deletLibrary = async (library_id) => {
    let resp = {
      error: false,
      auth: true,
      error_message: "",
      data: {},
    };
  
    resp = await _deletLibrary(library_id, resp);
    return resp;
  };


//   detail of library

  const _libraryDetail = async (library_id,resp) => {
    const library = await find_library_by_id(library_id);
    if (!library) {
        resp.error = true;
        resp.error_message = "There is no library to show.";
        return resp;
    }
   resp.data = library;
   return resp;
  };


  const libraryDetail = async (library_id) => {
    let resp = {
      error: false,
      auth: true,
      error_message: "",
      data: {},
    };
    resp = await _libraryDetail(library_id ,resp);
    return resp;
  };


  const _add_book_to_library = async (library_id,resp,body) => {
    const library = await find_library_by_id(library_id);
    if (!library) {
        resp.error = true;
        resp.error_message = "There is no library to add book.";
        return resp;
    }
  library.book.push(body);
  library.save();
  resp.data = library;
  return resp;
  };

const add_book_to_library = async (library_id, body) => {
  let resp = {
    error: false,
    auth: true,
    error_message: "",
    data: {},
  };
  resp = await _add_book_to_library(library_id ,resp, body.book_name);
  return resp;
};


  module.exports = {
    newLibrary,
    libraryDetail,
    deletLibrary,
    editLibray,
    add_book_to_library,
  };
  