const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'checker_texter',
  password: null,
  port: 5432,
})

const getClasslist = (classId, callback) => {
  const text = 'select * from students where class_id = $1';
  const values = [classId];

  pool
    .query(text, values)
    .then(res => {
      console.log('get classList response: ', res.rows);
      return callback(null, res.rows[0]);
    })
    .catch(e => callback(e));
}

const insertClass = (className, callback) => {
  const text = `INSERT INTO classes (name) VALUES ($1) RETURNING id`;
  const values = [className];

  pool
    .query(text, values)
    .then(res => {
      // console.log('insert class response: ', res.rows);
      return callback(null, res.rows);
    })
    .catch(e => callback(e));
}

const insertStudent = (student, classId, callback) => {
    const text = `INSERT INTO students (class_id, first_name, last_name, phone_number) VALUES ($1, $2, $3, $4) RETURNING id`;
    const values = [classId, student.firstName, student.lastName, student.phoneNumber];
  
    pool
      .query(text, values)
      .then(res => {
        // console.log('insert student response: ', res.rows);
        return callback(null, res.rows);
      })
      .catch(e => callback(e));
}

const insertAssignment = (assignment, callback) => {
    const text = `INSERT INTO assignments (class_id, title, date) VALUES ($1, $2, $3) RETURNING id`;
    const values = [assignment.classId, assignment.title, assignment.date];
  
    pool
      .query(text, values)
      .then(res => {
        // console.log('insert assignment response: ', res.rows);
        return callback(null, res.rows);
      })
      .catch(e => callback(e));
}

const insertScore = (scoreInfo, callback) => {
    const text = `INSERT INTO scores (student_id, assignment_id, score) VALUES ($1, $2, $3)`;
    const values = [scoreInfo.studentId, scoreInfo.assignmentId, scoreInfo.score];
  
    pool
      .query(text, values)
      .then(res => {
        console.log('insert score response: ', res.rows);
        return callback(null, res.rows);
      })
      .catch(e => callback(e));
}



module.exports = {
    getClasslist,
    insertClass,
    insertStudent,
    insertAssignment,
    insertScore
}