var count = 0;

var print = function () {
    count++;
    console.log('click number ', count);
};

var evt = require('events');
var emitter = new  evt.EventEmitter();

emitter.on('click', print);
emitter.addListener('click', print);
emitter.once('click', print);

emitter.emit('click');
emitter.emit('click');