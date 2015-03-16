define(function(require, exports, module) {
  'use strict';

  var combyne = require('combyne');

  document.body.innerHTML = combyne('It {{ lol }}', { lol: 'works' }).render();
});
