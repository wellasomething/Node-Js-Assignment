const v8 = require("v8");
// serialize an object
const data = { name: "John", age: 30 };
const serializedData = v8.serialize(data);
console.log(serializedData);
