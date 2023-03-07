const assert = require('assert');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/users') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ users: ['Alice', 'Bob', 'Charlie'] }));
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});

// Test the /users endpoint
http.get('http://localhost:3000/users', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const result = JSON.parse(data);
    assert.deepStrictEqual(result, { users: ['Alice', 'Bob', 'Charlie'] });
    console.log('Test passed');
    server.close();
  });
}).on('error', (err) => {
  console.error('Test failed:', err);
});


