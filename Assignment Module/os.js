const os = require('os');
// Getting the hostname
console.log('Hostname:', os.hostname());
// Getting the number of CPU cores
console.log('CPU cores:', os.cpus().length);
