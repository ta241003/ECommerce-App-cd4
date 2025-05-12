const paypal = require('paypal-rest-sdk');

paypal.configure({
  mode: 'sandbox', // Change to 'live' when you move to production
  client_id: 'Ad7y_AdXySLoQLIe9__f5yoX2J-CLiiL4ghhh062XuslpgOzjQpza9CoehDvMT-GMlM7WeEqEO5LA4xC',
  client_secret: 'EMtWm7cqP4T-tCYvEO8_6W2EotcGUS_xYCNSLE_jeylZg5plFQffMPARf45opLjvYSeK7qGm3EFxp-a-'
});

module.exports = paypal