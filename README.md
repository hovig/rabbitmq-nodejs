# rabbitmq-nodejs
simple rabbitmq-nodejs to connect to amqp and to send/receive messages

A node.js based dockerized application that connects to amqp and serves as an api to pass/send a message through publish api and puts it in the queue under a queue name that the subscribe api receives it.

### To run the application:
There are multiple ways to do that:
* A - As node.js app
1) git clone https://github.com/hovig/rabbitmq-nodejs.git
2) npm install
3) npm start

* B - As a docker
docker pull hovig/rabbitmq-nodejs
docker run hovig/rabbitmq-nodejs

* C - As a docker on your local machine
