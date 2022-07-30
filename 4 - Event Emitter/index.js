const logEvents = require('./logEvents');

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {};

// initialize the object from the MyEmitter class, which is an empty object
// however it doesn't actually have to have anything in it for us to
// create an object from it since the class itself is already defined via the
// "events" common core module
const myEmitter = new MyEmitter();

// add a listener for the log event
myEmitter.on('log', (msg) => logEvents(msg));

// Doesn't have to be done via timeout but this is just to kind of
// emulate the delay of nodemon refreshing the monitored folder
// and executing everything
setTimeout(() => {
    myEmitter.emit('log', 'Log event emitted.');
}, 250);