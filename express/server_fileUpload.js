const express = require('express');

const app = express();
const fs = require('fs');

const bodyParser = require('body-parser');
const multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/' }).array('image'));

app.get('/index_fileUpload.htm', (req, res) => {
  // eslint-disable-next-line no-useless-concat
  res.sendFile(`${__dirname}/` + 'index_fileUpload.htm');
});

app.post('/file_upload', (req, res) => {
  console.log(req.files[0]);

  const desFile = `${__dirname}/${req.files[0].originalname}`;
  fs.readFile(req.files[0].path, (err, data) => {
    fs.writeFile(desFile, data, (err1) => {
      let response;
      if (err1) {
        console.log(err1.stack);
      } else {
        response = {
          message: 'File uploaded successfully',
          filename: req.files[0].originalname,
        };
      }
      console.log(response);
      res.end(JSON.stringify(response));
    });
  });
});

const server = app.listen(8081, () => {
  const host = server.address().address;
  const { port } = server.address();

  console.log('应用实例，访问地址为 http://%s:%s', host, port);
});
