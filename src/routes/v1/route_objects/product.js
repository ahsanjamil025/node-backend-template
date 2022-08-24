const router = require("express").Router();
const { register_route } = require("../../../utils/reg_routes");
const addProduct = require("../../../controllers/product/addproduct");
const showProduct = require("../../../controllers/product/showproduct");
const editProduct = require("../../../controllers/product/editproduct");
const dellProduct = require("../../../controllers/product/dellproduct");

register_route({
    router,
    route: "/addp",
    auth_enable: false,
    post_method: addProduct,
  });

  register_route({
    router,
    route: "/showp",
    auth_enable: false,
    get_method: showProduct,
  });

  register_route({
    router,
    route: "/editp/:id",
    auth_enable: false,
    put_method: editProduct,
  });

  register_route({
    router,
    route: "/dellp/:id",
    auth_enable: false,
    delete_method: dellProduct,
  });

  module.exports = router;