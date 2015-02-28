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

function setImage (req, res) {
  console.log(req.files);
  res.redirect('/uploads/' + req.files['demo-img'][0].name);
}
