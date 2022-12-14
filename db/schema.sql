DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) UNIQUIE NOT NULL, 
    PRIMARY KEY (id)
);
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(45) NULL,
    salary DECIMAL(10.3) NULL,
    department_id INT NULL,
    PRIMARY KEY (id)
    
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30) NULL,
    last_name VARCHAR(30) NULL,
    title VARCHAR(15) NULL
    role_id INT NULL,
    manager_id INT NULL,
    
);