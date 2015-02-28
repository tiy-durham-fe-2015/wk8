var app = require('../express-app'),
    multer = require('multer');

app.use(multer({
  dest: './src/uploads',
  putSingleFilesInArray: true,
  rename: function (fieldname, filename) {
    return 'demo';
  }
}));

// Routes for a silly image upload demonstration
app.post('/imgs', setImage);
app.post('/api/imgs', setImageApi);

function setImage (req, res) {
  console.log(req.files);
  res.redirect('/uploads/' + req.files['demo-img'][0].name);
}

function setImageApi (req, res) {
  console.log(req.files);
  res.json({ img: '/uploads/' + req.files['demo-img'][0].name });
}
