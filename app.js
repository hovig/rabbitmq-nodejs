/** Hovig Ohannessian <hovigg@hotmail.com> **/
require('dotenv').load('./config/.env');

var express = require('express');
var amqp = require('amqp');
var app = express();
var jackrabbit = require('jackrabbit');

var url = process.env.AMQP_URL || 'amqp://guest:guest@localhost';
var topic = process.env.TOPIC || '#';

console.log('Opening connection to RabbitMQ');

var rabbit = jackrabbit(url);
var exchange = rabbit.default();
var msgQueue ;

app.set('port', process.env.PORT || 5000);

app.get('/publish/:message', function(req, res) {
    msgQueue = exchange.queue({name: topic, durable: true});

    var message = req.params.message;
    console.log('Message sent is: ' + message);

    exchange.publish({msg:message}, {key: topic});
    res.write('Message sent is: ' + message);
    res.end();
});

app.get('/subscribe', function(req, res) {
  msgQueue = exchange.queue({name: '#', durable: true});
  msgQueue.consume(sendMsg);
  res.end();
});

function sendMsg(data, ack) {
  console.log('Message received is: ' + JSON.stringify(data.msg));
  ack();
}

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});
