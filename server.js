'use strict';

const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
  .use((req, res) => res.sendFile(INDEX) )
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const io = socketIO(server);

io.on('connection', (socket) => {
  socket.on('item-change', (data) => socket.broadcast.emit('item-change-back', data));
  socket.on('hint-change', (data) => socket.broadcast.emit('hint-change-back', data));
  socket.on('zone-change', (data) => socket.broadcast.emit('zone-change-back', data));
});
