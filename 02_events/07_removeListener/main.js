var evt = require('events').EventEmitter;

var emitter = new evt();

emitter.on('myEvent', test);
console.log('listener was added');

emitter.emit('myEvent');

emitter.removeListener('myEvent', test);

emitter.emit('myEvent'); //listener will not be executed

function test() {
    console.log('this is test function');
}