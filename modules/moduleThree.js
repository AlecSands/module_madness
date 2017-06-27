var randomNumber = require('./randomNumber.js');
var convertToDollars = require('./convertToDollars.js');

function randomToDollars () {
  return convertToDollars(randomNumber(100, 100000));
}

function accountBalance () {
  return 'Account balance: \n';
}

module.exports = {
  accountBalance: accountBalance,
  randomToDollars: randomToDollars
};
