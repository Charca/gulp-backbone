var $ = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

var HomeView = Backbone.View.extend({
  el: '#main',
  render: function() {
    this.$el.html('Hola mundo');
  }
});

module.exports = HomeView;
