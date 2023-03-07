const dns = require('dns');

// Resolving a hostname to an IP address
dns.resolve('www.example.com', 'A', (err, addresses) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(addresses);
});
