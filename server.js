const inquirer = require('inquirer');
const router = express.Router();
const express = require('express');
const mysql = require('mysql');
const db = require('./db/connection');
const { connection } = require('./db');

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    });

let start = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'choices',
            message: 'Select a category',
            choices: [
                'Employees',
                'Roles',
                'Departments',
                'Quit',
            ],
        }
    ])
    .then((answer) => {
        switch (answer.choice) {
            case 'Employees':
                viewEmployees();
            case 'Roles':
                viewRoles();
            case 'Departments':
                viewDepartments();
            case 'Quit':
                quit();
                break;
        }
    })
};

const viewEmployees = () => {
    const request = "Select * FROM employee";
    db.query(req, (err, res) => {
        if (err) throw err;
        console.table(res);
        inquirer.prompt([
            {
                type: 'list',
                name: 'choice',
                message: 'Select an option',
                choices: [
                    'Menu',
                    'Quit'
                ],
            }
        ])
        .then((answer) => {
            switch(answer.choice) {
                case 'Menu': 
                    start();

                case 'Quit':
                    quit();
            }
        })
    })
};

