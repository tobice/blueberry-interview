var express = require('express');
var app = express();
var cors = require("cors");

app.use(cors());
app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/application/constraints', function (req, res) {
  res.header('Cache-Control', 'no-cache');
  res.json({
    amountInterval: {min: 10, max: 2000, step: 10, defaultValue: 400},  // IntervalBean:BigDecimal    Scrollable Amount interval
    monthlyPaymentInterval: {min: 10, max: 2000, step: 10, defaultValue: 400},  // IntervalBean:BigDecimal    Scrollable monthly payment interval
    termInterval: {min: 3, max: 30, step: 1, defaultValue: 15},       // IntervalBean:Integer       Scrollable term interval
  });
})

app.get('/application/first-loan-offer', function (req, res) {
  var amount = req.query.amount;
  var term = req.query.term;

  res.json({
    totalPrincipal: amount,
    term: term,
    totalCostOfCredit: amount / 10,
    totalRepayableAmount: amount * 1.2,
    monthlyPayment: amount / term
  })
})


var server = app.listen(8001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

