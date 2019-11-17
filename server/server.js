const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 1337

app.use(morgan('dev'));

app.get('/test', (req, res) => {
  console.log('server get test');
  res.send();
})


app.listen(port, () => {
  console.log('Server listening on port', port)
})
