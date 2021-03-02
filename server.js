const express = require('express');
const filesData = require('./data.json');
const cors = require('cors');
const app = express();
app.use(cors());
app.use((req, _res, next) => {
  // res.header('Access-Control-Allow-Credentials', true);
  const fullUrl = `${req.method} : ${req.protocol}://${req.get('host')}${
    req.originalUrl
  }`;
  console.log(fullUrl);
  next();
});

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  next();
});

app.get('/', (req, res) => {
  const files = filesData.files;
  res.status(200).send(JSON.stringify({ files: files }));
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server started and listening on  ${port}`);
});
