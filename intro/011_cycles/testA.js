console.log('File A is loading');

exports.done = false;

var b = require('./testB');
console.log('in file A, testB.done = ', b.done);

exports.done = true;
console.log('FileA is done!');