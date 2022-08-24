const router = require("express").Router();
const { register_route } = require("../../../utils/reg_routes");
const new_book = require("../../../controllers/book/addBook");
const edit_book = require("../../../controllers/book/editBook");
const delete_book = require("../../../controllers/book/deleteBook");
const book_detail = require("../../../controllers/book/bookDetail");
const books_list = require("../../../controllers/book/booksList");




register_route({
  router,
  route: "/new_book",
  auth_enable: false,
  post_method: new_book,
});

register_route({
    router,
    route: "/edit_book/:id",
    auth_enable: false,
    put_method: edit_book,
});

register_route({
    router,
    route: "/delete_book/:id",
    auth_enable: false,
    delete_method: delete_book,
});

register_route({
    router,
    route: "/book_detail/:id",
    auth_enable: false,
    get_method: book_detail,
});


register_route({
  router,
  route: "/books_list",
  auth_enable: false,
  get_method: books_list,
});




module.exports = router;
