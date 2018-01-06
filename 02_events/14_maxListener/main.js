var evt = require('events');

var emitter = new evt.EventEmitter();

emitter.setMaxListeners(20);

for(var index=0; index<15; index++) {
    (function () {
        var current = index;
        emitter.on('myEvent', function() {
            console.log(current, ' - index now')
        })
    })();
}

console.log('emitter has ', emitter.listenerCount('myEvent'), ' listeners.');

emitter.emit('myEvent');