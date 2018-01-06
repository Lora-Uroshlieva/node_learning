var evt = require('events').EventEmitter;

var emitter = new evt();

emitter.on('press', function () {
    console.log('Listener #1');
});

emitter.on('press', function () {
    console.log('Listener #2');
});

emitter.on('press', function () {
    console.log('Listener #3');
});

emitter.emit('press');