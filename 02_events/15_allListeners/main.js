var evt = require('events');

var emitter = new evt.EventEmitter();

emitter.on('myEvent', function () {
    console.log('first listener');
});

emitter.on('myEvent', function () {
    console.log('second listener');
});

var listeners = emitter.listeners('myEvent'); // returns array with all functions-handlers from listeners of event in argument

for (var i=0; i<listeners.length; i++) {
    listeners[i]();
}