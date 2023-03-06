const { Shoppinglist } = require('./shoppinglist.class');
const createModel = require('../../models/shoppinglist.model');
const hooks = require('./shoppinglist.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/shoppinglist', new Shoppinglist(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('shoppinglist');

  service.hooks(hooks);
};