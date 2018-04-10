# rabbitmq-nodejs
simple rabbitmq-nodejs to connect to amqp and to send/receive messages

> [rabbitmq architecture explained](https://github.com/hovig/rabbitmq-nodejs/blob/master/architecture.md)

A node.js based dockerized application that connects to amqp and serves as an api to pass/send a message through publish api and puts it in the queue under a queue name that the subscribe api receives it.

[Make sure rabbitmq-server is downloaded.](http://www.rabbitmq.com/download.html) Run ```rabbitmq-server start```.

### To run the application:
There are multiple ways to do that:
* A - As node.js app
1) git clone https://github.com/hovig/rabbitmq-nodejs.git
2) npm install
3) npm start

* B - As a docker
1) docker pull hovig/rabbitmq-nodejs
2) docker run hovig/rabbitmq-nodejs

* C - As a docker on your local machine


### What to expect when you run the messaging broker:

> **_To send a message and push it to the queue:_**

```
http://localhost:5000/publish/{"fitcoins":10, "steps":20}
```

> **_To receive message from the queue:_**

```
http://localhost:5000/subscribe
```

> **_Output:_**

![](https://github.com/hovig/rabbitmq-nodejs/blob/master/docs/Screen%20Shot%202018-01-28%20at%202.39.24%20PM.png)
