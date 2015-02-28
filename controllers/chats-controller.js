var app = require('../express-app'),
    lastId = 0,
    chats = [];

// Routes for a silly image upload demonstration
app.post('/chats', addChat);
app.get('/chats', getChats);

function addChat (req, res) {
  var chat = req.body;
  chat.id = ++lastId;
  chats.push(chat);

  if (chats.length > 40) {
    chats.shift();
  }
}

function getChats (req, res) {
  res.json(chats);
}
