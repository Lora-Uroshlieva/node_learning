var evt = require('events');

var emitter = new evt.EventEmitter();

emitter.on('testEvent', function (a, b) {
    console.log(a, b);
});

emitter.emit('testEvent', 4, 1);
emitter.emit('testEvent', 1);
emitter.emit('testEvent');

emitter.on('push', function () {
    console.log(arguments);
});

emitter.emit('push', 1, 6, 'fgfhfhgfg', 'aasaaa');