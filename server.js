var http = require('http');
var moduleThree = require('./modules/moduleThree.js');

var server = http.createServer(function(request, response){

  response.writeHead(200);
  response.write('Request received. Thank you for making a request.');

  // Logging account balance string and randomly generated dollar amount
  // Doing this by using the methods exported from moduleThree.js
  console.log(moduleThree.accountBalance() + moduleThree.randomToDollars());
  response.end();
});

server.listen(3000);
console.log('listening on port 3000');
