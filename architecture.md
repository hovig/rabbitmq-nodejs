# **RabbitMQ  Architecture**

![rabbitmq architecture pic](https://raw.githubusercontent.com/hovig/rabbitmq-nodejs/master/docs/rabbitmq%20architecture.png)


Message Queuing and middleware are very core enterprise components. Message broker's task is to leverage inconsistencies in the system and queue the incoming messages from client applications called Producers, the messages get contained in the Message Queuing labeled as Topic with a given name and transmits them to the Consumer(s) which are other applications that make use of these messages. 

 

Message broker such as Rabbitmq is very helpful to create a stability and speed in production and consumption mechanisms. Rabbitmq has AMQP (Advanced Message Queuing Protocol) in its core, a middleware server to perform tasks like message orientation, queuing and routing in a reliable and secured ways.  

 

RabbitMQ's underlying key features: 

* AMQP middleware 
* Producers send messages to the queue 
* Consumers will consume these messages 
* Multiple consumers can connect to the queue at the same time 
* Reliability, stability and real-time performance 
* It can be used with Redis (simple memory level pub/sub) 
