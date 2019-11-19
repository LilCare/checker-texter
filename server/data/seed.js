const seedData = require('./sampleStudentData.js');
const db = require('./index.js');
const Promise = require('bluebird');

const callback = (err, response) => {
    if (err) {
        console.log('err passed to callback: ', err);
        return err;
    } else {
        return response;
    }
}

Promise.each(seedData.sampleClasses, (sampleClass) => {
    return db.insertClass(sampleClass.className, callback);
})
  .then(() => Promise.each(seedData.sampleStudents, (student) => {
    return db.insertStudent(student, 1, callback);
  }))
  .then(() => Promise.each (seedData.sampleAssignments, (assignment) => {
      return db.insertAssignment(assignment, callback);
  }))
  .catch((err) => console.log('error adding data to database'));

  