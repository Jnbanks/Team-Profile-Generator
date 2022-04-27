const inquirer = require('inquirer');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const employees = [];


function buildTeam() {
    inquirer.prompt([
        {
            name: 'buildTeamPrompt',
            type: 'list',
            message: 'Who would you like to add to your team?',
            choices: ['Manager', 'Engineer', 'Intern', 'Everyone has been added!']
        }
    ]) .then(answers => {
        switch (answers.question) {
            case 'Manager':
                console.log('add manager!')
                addManager();
                break;

            case 'Engineer':
                console.log('add engineer!')
                addEngineer();
                break;

            case 'Intern':
                console.log('add intern!')
                addIntern();
                break;

            default:
                htmlBuilder()
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            name: 'managerName',
            message: "What is the manager's name?",
            type: 'input'
        },
        {
            name: 'managerId',
            message: "What is the manager's id?",
            type: 'input'
        },
        {
            name: 'managerEmail',
            message: "What is the manager's email address?",
            type: 'input'
        },
        {
            name: 'managerOfficeNumber',
            message: "What is the manager's office number?",
            type: 'input'
        }

    ]).then(answers => {
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        employees.push(newManager);
        buildTeam();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: 'engineerName',
            message: "What is the engineer's name?",
            type: 'input'
        },
        {
            name: 'engineerId',
            message: "What is the engineer's id?",
            type: 'input'
        },
        {
            name: 'engineerEmail',
            message: "What is the engineer's email address?",
            type: 'input'
        },
        {
            name: 'engineerGithub',
            message: "What is the engineer's Github?",
            type: 'input'
        }

    ]).then(answers => {
        const newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        employees.push(newEngineer);
        buildTeam();
    })
}

function addIntern() {
    inquirer.prompt([
        {
            name: 'internName',
            message: "What is the intern's name?",
            type: 'input'
        },
        {
            name: 'internId',
            message: "What is the intern's id?",
            type: 'input'
        },
        {
            name: 'internEmail',
            message: "What is the intern's email address?",
            type: 'input'
        },
        {
            name: 'internSchool',
            message: "What is the intern's school?",
            type: 'input'
        }

    ]).then(answers => {
        const newIntern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.InternSchool);
        employees.push(newIntern);
        buildTeam();
    })
}