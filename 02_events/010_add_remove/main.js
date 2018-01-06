var evt = require('events');

var emitter = new evt.EventEmitter();


//listener that catches system event newListener
emitter.on('newListener', function (event, listener) {
    if(event=='myEvent') {console.log('my event was added into lists')}
});

//listener that catches system event removeListener
emitter.on('removeListener', function (event, listener) {
    if(event=='myEvent') {console.log('my event was removed')}
});

emitter.on('myEvent', test);
console.log(emitter.listenerCount('myEvent'));

emitter.removeListener('myEvent', test);
console.log(emitter.listenerCount('myEvent'));

function test() {
    console.log('test event');
}
