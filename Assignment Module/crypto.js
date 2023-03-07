const crypto = require('crypto');
// Hashing a string
const hash = crypto.createHash('sha256');
hash.update('Hello, world!');
console.log(hash.digest('hex'));
