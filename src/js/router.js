var Backbone = require('backbone');
var HomeView = require('./views/home.view');

var Router = Backbone.Router.extend({
  routes: {
    '*path': 'default'
  },

  initialize: function() {
    Backbone.history.start();
  },

  default: function() {
    var view = new HomeView();
    view.render();
  }
});

module.exports = Router;
