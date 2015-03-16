require('amd.js').require.load('./src/').catch(function(ex) {
  console.log(ex.stack);
});
