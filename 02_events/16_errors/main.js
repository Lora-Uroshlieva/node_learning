var evt = require('events');

var emitter = new evt.EventEmitter();

emitter.on('error', function (err) {
    console.log('processing error');
    console.log(err);
});

emitter.emit('error', new Error('test error message'));