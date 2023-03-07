const util = require('util');
// Inspect an object
const objectToInspect = {
  name: 'Alice',
  age: 30,
  email: 'alice@example.com',
};
const inspectedObject = util.inspect(objectToInspect, { colors: true });
console.log(inspectedObject);