const http = require('http');
const { getUsers } = require('./modules/users'); 


const port = process.env.PORT || 3003;
const host = '127.0.0.1';

const server = http.createServer((req, res) => {
  
  const url = new URL(req.url, `http://${host}:${port}`);
  const params = url.searchParams;

  
  if (params.has('hello')) {
    const name = params.get('hello');
    if (name) {
      
      res.writeHead(200, { 'Content-Type': 'text/plain' }); 
      res.end(`Hello, ${name}`);
    } else {
      
      res.writeHead(400, { 'Content-Type': 'text/plain' });
      res.end('Enter a name');
    }
  } else if (params.has('users')) {
    
    try {
      const users = getUsers();
      res.writeHead(200, { 'Content-Type': 'application/json' }); 
      res.end(JSON.stringify(users));
    } catch (err) {
      
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error reading users');
    }
  } else if (params.toString() === '') {
    
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else {
    
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end(''); 
  }
});


server.listen(port, host, () => {
  
  console.log(`Сервер запущен по адресу http://${host}:${port}`);
});
