var app = require('../express-app'),
    WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({ port: 8080 }),
    lastId = 0,
    chats = [];

console.log('WebSockets on port 8080');

// Web socket server shtuff
wss.broadcast = function (data) {
  var message = JSON.stringify(data);
  wss.clients.forEach(function each(client) {
    client.send(message);
  });
};

// Routes for a silly image upload demonstration
app.post('/chats', addChat);
app.get('/chats', getChats);

function addChat (req, res) {
  var chat = req.body;
  chat.id = ++lastId;
  chats.push(chat);

  wss.broadcast(chat);

  if (chats.length > 40) {
    chats.shift();
  }
}

function getChats (req, res) {
  res.json(chats);
}
