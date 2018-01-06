console.log('the main module started work');

var a = require('./testA');
var b = require('./testB');

console.log('work in main, testA.done = ', a.done, 'testB.done = ', b.done);