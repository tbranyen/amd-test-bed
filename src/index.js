define(function(require, exports, module) {
  'use strict';

  var tmpl = require('./templates/test.html');
  var output = tmpl.render({ lol: 'it works!' });

  console.log(output);
});
