-- Drops the programming_db if it already exists --
DROP DATABASE IF EXISTS tracker_db;

-- Created the DB "wizard_schools_db" (only works on local connections)
CREATE DATABASE tracker_db;

-- Use the DB wizard_schools_db for all the rest of the script
USE tracker_db;

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);
CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
);
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);