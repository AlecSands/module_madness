var http = require('http');
var moduleThree = require('./modules/moduleThree.js');
// var randomNumber = require('./modules/randomNumber.js');
// var convertToDollars = require('./modules/convertToDollars.js');

var server = http.createServer(function(request, response){

  response.writeHead(200);
  response.write('Request received. Thank you for making a request.');
  console.log(moduleThree.accountBalance() + moduleThree.randomToDollars());
  response.end();
});

server.listen(3000);
console.log('listening on port 3000');
