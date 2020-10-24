const express = require('express');
const app = express();
const server = app.listen(5000);

/*
if this is slow, move to system where the player just inits
everything and the server or other player computes everything after that
instead of reseting the array to nothing all the time
*/



app.use(express.static('public'));

console.log("Server is running!");

const socket = require('socket.io');
const io = socket(server);


let players = [];
let blobs = [];


// let newPellets = [];

//Fix so that your not sending the current players positions to itself with broadcast

setInterval(() => { io.sockets.emit('heartbeat', {entities: players}); }, 10);
// const nsp = io.of('/my-namespace');
// nsp.on('connection', (socket) => {
io.sockets.on('connection', (socket) => {
  console.log("New Connection, ID: ", socket.id);
  socket.on('start', (data) => {
      players.push({
        x: data.x,
        y: data.y,
        w: data.w,
        currentHealth: data.currentHealth,
        maxhealth: data.maxhealth,
        col: data.col,
        col2: data.col2,
        inside: data.inside,
        id: socket.id,
        gameId: data.gameId
      });
    }
  );

  socket.on('updatePackage', (data) => {
      //look up some good way of searching for items in a list
      // console.log(pellets);
      for (let i = 0; i < players.length; i++){
        if (socket.id == players[i].id){
          if (players[i].x != data.player.x) players[i].x = data.player.x;
          if (players[i].y != data.player.y) players[i].y = data.player.y;
          if (players[i].currentHealth != data.player.currentHealth) players[i].currentHealth = data.player.currentHealth;
          if (players[i].inside != data.player.inside) players[i].inside = data.player.inside;
        }
      }
    }
  );

  socket.on('newPellet', (data) => {
      socket.broadcast.emit('initNewPellet', data);
    }
  );

  // socket.on('pelletHit', (data) => {
  //     for (let i = 0; i < pellets.length; i++){
  //       if (data.id == pellets[i].id && data.pelletNum == pellets[i].pelletNum){
  //         pellets.splice(i, 1);
  //       }
  //     }
  //   }
  // );

  socket.on('newBlob', (data) => {
      socket.broadcast.emit('initNewBlob', data);
    }
  );

  socket.on('disconnect', () => {
    console.log("A client has disconnected", socket.id);
    for (let i = players.length - 1; i >= 0; i--){
      if (players[i].id == socket.id) {
        players.splice(i, 1);
      }
    }
  });
});
