const users = require("./users/users.service.js");
const personalinfo = require("./personalinfo/personalinfo.service.js");
const shoppinglist = require("./shoppinglist/shoppinglist.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(personalinfo);
  app.configure(shoppinglist);
  // ~cb-add-configure-service-name~
};
