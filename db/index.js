const inquirer = require('inquirer');
const database = require('./db'


database.findAllEmloyees().then(tracker => {
    promptUser(tracker[0])
})

const promptUser = (employeeList) => {
    return inquirer.prompt([
        {
            type: 'list'
            name: 'employee list'
            message: 'What is your role?'
            choices: ['']
        }
    ])
}
