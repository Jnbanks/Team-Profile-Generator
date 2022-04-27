const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];


function askQuestion() {
    inquirer.prompt([
        {
            name: 'question',
            type: 'list',
            choices: ['Add a Manager', 'Add an Engineer', 'Add an Intern', 'quit']
        }
    ]) .then(answers => {
        switch (answers.question) {
            case 'Add a Manager':
                console.log('add manager!')
                addManager();
                break;

            case 'Add an Engineer':
                console.log('add engineer!')
                addEngineer();
                break;

            case 'Add an Intern':
                console.log('add intern!')
                addIntern();
                break;

            default:
                console.log('nice team building!')
                break;
        }
    })
}

function addManager() {
    inquirer.prompt({
        name: 'name',
        message: "What is the manager's name?",
        type: 'input'
    }).then(({ name }) => {
        console.log(name);
        const newManager = new Manager(name);
        employees.push(newManager)
        console.log(employees)
    })
}