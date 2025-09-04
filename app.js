const http = require('http');
const server = http.createServer((req, res) => {
    console.log("Hello You are connected to the server");
})
server.listen(5000);