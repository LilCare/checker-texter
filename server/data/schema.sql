DROP DATABASE IF EXISTS checker_texter;

CREATE DATABASE checker_texter;

\c checker_texter;

CREATE TABLE classes (
  id            SERIAL,
  name          VARCHAR     NOT NULL,

  PRIMARY KEY   (id)
);

CREATE TABLE students (
  id             SERIAL,
  class_id       INTEGER    NOT NULL,
  first_name     VARCHAR    NOT NULL,
  last_name      VARCHAR    NOT NULL,
  phone_number   VARCHAR    NOT NULL,

  PRIMARY KEY (id),
  FOREIGN KEY (class_id)      REFERENCES classes (id)
);

CREATE TABLE assignments (   
  id             SERIAL,
  class_id       INTEGER,
  title          VARCHAR    NOT NULL,
  date           DATE       NOT NULL,

  PRIMARY KEY   (id),
  FOREIGN KEY   (class_id)      REFERENCES classes (id)
);

CREATE TABLE scores (
  student_id        INTEGER,
  assignment_id     INTEGER,
  score             VARCHAR,

  FOREIGN KEY   (student_id)    REFERENCES students (id),
  FOREIGN KEY   (assignment_id) REFERENCES assignments (id)
);

