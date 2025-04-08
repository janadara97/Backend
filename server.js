const http = require('http');

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === '/' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Home Page');
  } else if (url === '/about' && method === 'GET') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>About Page</title>
        <style>
          body { font-family: Arial, sans-serif; }
          h1 { color: #333; }
          p { color: #555; }
        </style>
      </head>
      <body>
        <h1>About Page</h1>
        <p>This is the about page of our Project Gama</p>
        <p>Gama is a mobile app application which is about the Aqua Leanyer</p>
        <p>Thank you for visiting!</p>
      </body>
      </html>
    `); 
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});


console.log("Server running on port 3000")

