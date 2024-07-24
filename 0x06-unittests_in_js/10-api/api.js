const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(7865, () => {
  console.log(`API available on localhost port 7865`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  if (!Number.isNaN(Number(req.params.id))) {
    res.send(`Payment methods for cart ${req.params.id}`);
  } else {
    res.status(404).send('Cart not found');
  }
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  })
});

app.post('/login', (req, res) => {
  res.send(`Welcome ${req.body.userName}`);
});

module.exports = app;
