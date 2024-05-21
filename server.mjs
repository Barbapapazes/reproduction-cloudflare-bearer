import http from 'node:http';

const server = http.createServer((req, res) => {
  // Get headers
  console.log(req.headers);
  res.end('Hello World\n');
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
})
