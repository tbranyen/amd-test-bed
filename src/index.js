define(function(require, exports, module) {
  'use strict';

  var combyne = require('combyne');
  var output = combyne('It {{ lol }}', { lol: 'works' }).render();

  if (typeof document !== 'undefined') {
    document.body.innerHTML = output;
  }
  else {
    console.log(output);
  }
});
