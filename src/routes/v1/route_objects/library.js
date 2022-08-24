const router = require("express").Router();
const { register_route } = require("../../../utils/reg_routes");
const new_library = require("../../../controllers/library/newLibrary");
const edit_library = require("../../../controllers/library/editLibrary");
const delete_library = require("../../../controllers/library/deleteLibrary");
const library_details = require("../../../controllers/library/libraryDetail");


register_route({
  router,
  route: "/new_library",
  auth_enable: false,
  post_method: new_library,
});

register_route({
    router,
    route: "/edit_library/:id",
    auth_enable: false,
    put_method: edit_library,
});

register_route({
    router,
    route: "/delete_library/:id",
    auth_enable: false,
    delete_method: delete_library,
});

register_route({
    router,
    route: "/library_details/:id",
    auth_enable: false,
    get_method: library_details,
});




module.exports = router;
