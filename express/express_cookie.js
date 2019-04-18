const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req) => {
  console.log('Cookies: ', req.cookies);
});

app.listen(8081);
