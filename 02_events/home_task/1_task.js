var event = require('events');
var emitter = new event.EventEmitter();

emitter.on('click', function () {
    console.log('click');
});

emitter.on('click', function () {
    console.log('another click listener')
});

function test() {
    console.log('this is test function');
    console.log(arguments);
}

emitter.on('ping', test);

emitter.emit('click');
emitter.emit('ping');
emitter.emit('ping', 1, 2, 3);
