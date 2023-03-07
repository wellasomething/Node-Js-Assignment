const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
// Attaching a listener to an event
myEmitter.on('event', () => {
  console.log('an event occurred!');
});
// Emitting an event
myEmitter.emit('event');
