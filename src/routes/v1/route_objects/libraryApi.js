const router = require("express").Router();
const { register_route } = require("../../../utils/reg_routes");
const add_Book = require("../../../controllers/libraryApi/addBook");
const assign_Book = require("../../../controllers/libraryApi/assignBook");

register_route({
    router,
    route: "/add_Book/:id",
    auth_enable: false,
    post_method: add_Book,
});

register_route({
    router,
    route: "/assign_Book/:id",
    auth_enable: true,
    post_method: assign_Book,
});


module.exports = router;