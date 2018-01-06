var evt = require('events').EventEmitter;

var emitter = new evt();

emitter.on('myEvent', function () {
    console.log('Listener #1')
});

emitter.on('myEvent', function () {
    console.log('Listener #2')
});

emitter.on('myEvent', function () {
    console.log('Listener #3')
});


emitter.emit('myEvent');

emitter.removeAllListeners('myEvent');

emitter.emit('myEvent'); //listeners will not be executed