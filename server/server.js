const express = require('express');
const morgan = require('morgan');
const db = require('./data/index.js')

const app = express();

const port = 19002

app.use(morgan('dev'));

app.get('/test', (req, res) => {
  res.send('server get test');
})

app.get('/api/class/:id', (req, res) => {
  const classId = req.params.id
  db.getClasslist(classId, (err, classlist) => {
    if (err) {
      console.log('error getting classlist to server: ', err);
      res.send(err);
    } else {
      res.send(classlist);
    }
  })
})


app.listen(port, () => {
  console.log('Server listening on port', port)
})
