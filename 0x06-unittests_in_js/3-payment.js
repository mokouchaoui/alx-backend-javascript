const utils = require('./utils');

module.exports = function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ${utils.calculateNumber('SUM', totalAmount, totalShipping)}`);
};