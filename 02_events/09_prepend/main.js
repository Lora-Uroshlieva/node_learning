var evt = require('events').EventEmitter;

var emitter = new evt();

emitter.on('myEvent', function () {
    console.log('Listener #1')
});

emitter.on('myEvent', function () {
    console.log('Listener #2')
});

emitter.prependListener('myEvent', function () {
    console.log('Listener #3')
});

emitter.once('myEvent', function () {
    console.log('Listener #4')
});

emitter.prependOnceListener('myEvent', function () {
    console.log('Listener #5')
});

emitter.emit('myEvent');
emitter.emit('myEvent');