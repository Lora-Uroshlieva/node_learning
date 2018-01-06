var event = require('events');

var emitter = new event.EventEmitter();

exports.x = 10;

emitter.on('myEvent', function () {
    console.log('ordinary function: ');
    console.log(this);
});

emitter.on('myEvent', () => {
    console.log('Arrow function');
    console.log(this.x);
});

emitter.emit('myEvent');