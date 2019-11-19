const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.USER,
  host: 'localhost',
  database: 'checker_texter',
  password: null,
  port: 5432,
})

const getClasslist = (classId, callback) => {
//   id | class_id | first_name |  last_name  | phone_number 
//   ----+----------+------------+-------------+--------------
//   27 |        1 | Varun      | Arora       | +14025987648
//   25 |        1 | Richard    | Cao         | +14025987648
//   19 |        1 | Lily       | Carey       | +14025987648
  const text = 'SELECT * FROM students WHERE class_id = $1 ORDER BY last_name ASC';
  const values = [classId];

  pool
    .query(text, values)
    .then(res => {
      // console.log('get classList response: ', res.rows);
      return callback(null, res.rows);
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

const insertScore = (studentId, assignmentId, score, callback) => {
    const text = `INSERT INTO scores (student_id, assignment_id, score) VALUES ($1, $2, $3)`;
    const values = [studentId, assignmentId, score];


  
    pool
      .query(text, values)
      .then(res => {
        console.log('insert score response: ', res.rows);
        return callback(null, res.rows);
      })
      .catch(e => callback(e));
}

const getScoreInfo = (assignmentId, studentId, callback) => {
    // Sample query return from db:
    // first_name | phone_number |  score   
    //------------+--------------+----------
    // Avery      | +14025987648 | complete
    const text = `SELECT students.first_name, students.phone_number, scores.score
                  FROM students INNER JOIN scores
                  ON students.id = scores.student_id
                  WHERE assignment_id = $1 AND student_id = $2`;
    const values = [assignmentId, studentId];
  
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
    insertScore,
    getScoreInfo
}