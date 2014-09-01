var $ = require('jquery');
var Backbone = require('backbone');
var template = require('../templates/home.template.hbs');

Backbone.$ = $;

var HomeView = Backbone.View.extend({
  el: '#main',
  template: template,

  render: function() {
    this.$el.html(template(
      {name: 'Maxi'}
    ));
  }
});

module.exports = HomeView;
