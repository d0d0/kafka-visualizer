var kafka = require("kafka-node");
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function (request, response) {
    // process HTTP request. Since we're writing just WebSockets
    // server we don't have to implement anything.
});
server.listen(1337, function () {
});

var clients = [];
// create the server
var wsServer = new WebSocketServer({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function (request) {
    var connection = request.accept(null, request.origin);
    clients.push(connection);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function (message) {
        if (message.type === 'utf8') {
            // process WebSocket message
        }
    });

    connection.on('close', function (connection) {
        // close user connection
    });
});


// Kafka

var options = {
    kafkaHost: 'localhost:9092',
    groupId: 'pcduc'
};

var consumer = new kafka.ConsumerGroup(options,
    ['sampler', 'themida', 'static', 'scanner', 'release', 'result'].map(function (obj) {
        return 'releaser-' + obj;
    }));


consumer.on('message', function (message) {
    console.log(message);
    clients.forEach(function (client) {
        client.sendUTF(JSON.stringify({message}));
    })
});


