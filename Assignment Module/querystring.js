const querystring = require('querystring');
const params = {
  foo: 'bar',
  baz: ['qux', 'quux'],
  corge: ''
};
const encoded = querystring.stringify(params);
console.log(`Encoded: ${encoded}`);
const decoded = querystring.parse(encoded);
console.log(`Decoded: ${JSON.stringify(decoded)}`);
