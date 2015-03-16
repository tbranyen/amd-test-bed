define(function(require, exports, module) {
  'use strict';

  var combyne = require('combyne');
  var output = combyne('It {{ lol }}!', { lol: 'works' }).render();

  console.log(output);
});
