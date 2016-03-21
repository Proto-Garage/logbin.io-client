'use strict';

var zmq = require( 'zmq' );
var socket = new zmq.socket( 'req' );
var subscriber = new zmq.socket( 'sub' );
var reqClient = new zmq.socket( 'req' );

exports.startConnecting = function() {
  socket.connect( 'tcp://127.0.0.1:5555' );
};

exports.connectToOutbound = function() {
  subscriber.connect( 'tcp://127.0.0.1:5557' );
};

exports.connectToOutboundReqClient = function() {
  reqClient.connect( 'tcp://127.0.0.1:5556' );
};

exports.socket = socket;
exports.subscriber = subscriber;
exports.reqClient = reqClient;
