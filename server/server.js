const express = require('express');
const morgan = require('morgan');

const app = express();

const port = 19002

app.use(morgan('dev'));

app.get('/test', (req, res) => {
  res.send('server get test');
})


app.listen(port, () => {
  console.log('Server listening on port', port)
})
