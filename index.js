var amd = require('amd.js');

// Augment the LoDash AMD loader to work in Node.
amd.require.load('combyne-amd-loader').then(function(plugin) {
  var combyne = require('combyne');

  // Need to read from the FS instead of the browser.
  plugin.load = function(name, req, done, config) {
    require('fs').readFile(name, function(err, contents) {
      done(combyne(String(contents)));
    });
  };
});

// Ensure the config has loaded.
amd.require.load('./src/config');

// Load all source.
amd.require.load('./src/').catch(function(ex) {
  console.log(ex.stack);
});
