// Testing for K8 and Docker

const http = require('http')
const os   = require('os')

console.log("k8lab01 server starting ...");

var handler = function(request, response) {
  console.log("Received request from " + request.connection.remoteAddress);
  response.writeHead(200);
  response.end("You've (" + request.connection.remoteAddress + ") hit " + os.hostname() + "\n");
}

var www = http.createServer(handler);
www.listen(8080);
