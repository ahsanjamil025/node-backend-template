const admin = require("./route_objects/admin");
const app_api = require("./route_objects/app_api");
const website_setting = require("./route_objects/website_setting");
const customer = require("./route_objects/customer");
const book = require("./route_objects/book");
const library = require("./route_objects/library");
const library_api = require("./route_objects/libraryApi");
const init = require("./route_objects/init");
const index = require("../index");

const v1_routes = (app) => {
  app.use("/", index);
  app.use("/api/app_api", app_api);
  app.use("/api/admin", admin);
  app.use("/api/customer", customer);
  app.use("/api/website_setting", website_setting);
  app.use("/api/init", init);
  app.use("/api/library", library);
  app.use("/api/book", book);
  app.use("/api/library_api", library_api);
};

module.exports = { v1_routes };
