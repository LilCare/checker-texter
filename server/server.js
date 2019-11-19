const express = require('express');
const morgan = require('morgan');
var bodyParser = require('body-parser');
const cors = require('cors');
const Promise = require('bluebird');
const db = require('./data/index.js');

const port = 19002

const app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// callback to use when chaining queries to db
const promiseCallback = (err, response) => {
  if (err) {
      console.log('err passed to callback: ', err);
      return err;
  } else {
      return response;
  }
}

app.use(cors());

app.use(morgan('dev'));

app.get('/test', (req, res) => {
  res.send('server get test');
})

app.get('/api/class/:id', (req, res) => {
  const classId = req.params.id;
  db.getClasslist(classId, (err, classlist) => {
    if (err) {
      console.log('error getting classlist to server: ', err);
      res.send(err);
    } else {
      res.send(classlist);
    }
  })
})


app.post('/api/assignment/:id/scores', jsonParser, (req, res) => {
  const assignmentId = req.params.id;
  //let students = JSON.parse(req.body);
  let students = req.body.students;
  console.log(students[0]);

  Promise.each(students, (student) => {
    let studentId = student.id;
    let score = student.score || 'complete';
    return db.insertScore(studentId, assignmentId, score, promiseCallback)
  })
  .then((results) => res.send(results))
  .catch((err) => res.send(err))
  
})


app.listen(port, () => {
  console.log('Server listening on port', port)
})

//fetch('http://localhost:19002/api/class/1', {
  //     method: 'GET'
  //   })
  //     .then((response) => response.json())
  //     .then((students) => this.setState({ students }))
  //     .catch((err) => console.log(err));