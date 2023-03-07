const net = require('net');
const server = net.createServer(socket => {
  console.log('Client connected');
  socket.on('data', data => {
    console.log(`Received data: ${data}`);
  });
  socket.on('end', () => {
    console.log('Client disconnected');
  });
});
const port = 3000;
server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
