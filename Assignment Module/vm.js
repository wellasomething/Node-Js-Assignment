const vm = require('vm');
// create a new context for the script
const context = vm.createContext({});
// define a variable in the context
vm.runInContext('var x = 10;', context);
// evaluate an expression in the context
const result = vm.runInContext('x * 2', context);
console.log(result); // 20
