'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = 443;
const INDEX = 'https://resnox.as2pik.ovh/zeldaOnlineWorldTracker/index.html';

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
	console.log('Client connected');
	socket.on('disconnect', () => console.log('Client disconnected'));
});
  
