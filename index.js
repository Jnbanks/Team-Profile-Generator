const inquirer = require('inquirer');
//const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const fs = require('fs');

const employees = [];


function buildTeam() {
    inquirer.prompt([
        {
            name: "buildTeamPrompt",
            type: "list",
            message: "Who would you like to add to your team?",
            choices: ["Manager", "Engineer", "Intern", "Everyone has been added!"]
        }
    ]).then(answers => {
        switch (answers.buildTeamPrompt) {
            case "Manager":
                console.log("add manager!")
                addManager();
                break;

            case "Engineer":
                console.log("add engineer!")
                addEngineer();
                break;

            case "Intern":
                console.log("add intern!")
                addIntern();
                break;

            case "Everyone has been added!":
                fs.writeFile("dist/index.html", generateHtml(employees), (err) =>
                err ? console.log(err) : console.log("Success!")
                );
                //cssBuilder();
                break;

            default:
                console.log("You completed your team!")
                break;
        }
    })
}

function addManager() {
    inquirer.prompt([
        {
            name: "managerName",
            message: "What is the manager's name?",
            type: "input"
        },
        {
            name: "managerId",
            message: "What is the manager's id?",
            type: "input"
        },
        {
            name: "managerEmail",
            message: "What is the manager's email address?",
            type: "input"
        },
        {
            name: "managerOfficeNumber",
            message: "What is the manager's office number?",
            type: "input"
        }

    ]).then(answers => {
        const newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        employees.push(newManager);
        console.log(newManager);
        buildTeam();
    })
}

function addEngineer() {
    inquirer.prompt([
        {
            name: "engineerName",
            message: "What is the engineer's name?",
            type: "input"
        },
        {
            name: "engineerId",
            message: "What is the engineer's id?",
            type: "input"
        },
        {
            name: "engineerEmail",
            message: "What is the engineer's email address?",
            type: "input"
        },
        {
            name: "engineerGithub",
            message: "What is the engineer's Github?",
            type: "input"
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
            name: "internName",
            message: "What is the intern's name?",
            type: "input"
        },
        {
            name: "internId",
            message: "What is the intern's id?",
            type: "input"
        },
        {
            name: "internEmail",
            message: "What is the intern's email address?",
            type: "input"
        },
        {
            name: "internSchool",
            message: "What is the intern's school?",
            type: "input"
        }

    ]).then(answers => {
        console.log(answers);
        const newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        employees.push(newIntern);
        buildTeam();
    })
}

function buildhtml (team) {
    console.log("Team built!");

    // const buildhtml = team => {

        const buildManager = manager => {
            console.log(manager);
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                    <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
            `
        };

        const buildEngineer = engineer => {
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank" rel="noopener noreferrer">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
            `
        };

        const buildIntern = intern => {
            return `
            <div class="card employee-card">
            <div class="card-header">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
            `;
        };

        const htmldoc = [];

        htmldoc.push(team
            .filter(employee => employee.getRole() === "Manager")
            .map(manager => buildManager(manager))
            .join("")
        );
        htmldoc.push(team
            .filter(employee => employee.getRole() === "Engineer")
            .map(engineer => buildEngineer(engineer))
            .join("")
        );
        htmldoc.push(team
            .filter(employee => employee.getRole() === "Intern")
            .map(intern => buildIntern(intern))
            .join("")
        );

        return htmldoc.join("")
}
//I think that another const/function can be placed here. and then the fs.writeFile can go below that and still be inside the buildhtml function
function generateHtml (team) {
    return `
    
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${buildhtml(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;

}



buildTeam();
