console.log('File B is loading');

exports.done = false;

var a = require('./testA');
console.log('in file B, testA.done = ', a.done);

exports.done = true;
console.log('FileB is done!');