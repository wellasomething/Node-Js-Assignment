const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');

  // Create a new buffer with some text
  const text = 'Hello, world!';
  const buffer = Buffer.from(text);

  // Write the buffer to the response
  res.write(buffer);

  // End the response
  res.end();
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});