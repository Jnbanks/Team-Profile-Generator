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
                htmlBuilder();
                cssBuilder();
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
        const newIntern = new Intern(answers.InternName, answers.InternId, answers.InternEmail, answers.InternSchool);
        employees.push(newIntern);
        buildTeam();
    })
}

function htmlBuilder () {
    console.log("Team built!");

    const buildhtml = team => {

        const buildManager = manager => {
            return `
        <div class="card">
            <h3>${manager.getName()}</h3>
            <h3>${manager.getRole()}</h3>
            <p>${manager.getId()}</p>
            <p>${manager.getEmail()}</p>
            <p>${manager.getOfficeNumber()}</p>
        </div>
            `
        };

        const buildEngineer = engineer => {
            return `
        <div class="card">
            <h3>${engineer.getName()}</h3>
            <h3>${engineer.getRole()}</h3>
            <p>${engineer.getId()}</p>
            <p>${engineer.getEmail()}</p>
            <p>${engineer.getGithub()}</p>
        </div>
            `
        };

        const buildIntern = intern => {
            return `
        <div class="card">
            <h3>${intern.getName()}</h3>
            <h3>${intern.getRole()}</h3>
            <p>${intern.getId()}</p>
            <p>${intern.getEmail()}</p>
            <p>${intern.getSchool()}</p>
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

        return htmlBuilder.join("")

    }
//I think that another const/function can be placed here. and then the fs.writeFile can go below that and still be inside the buildhtml function
    return `
    
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
   
    <!-- <style>
    body {background-color: powderblue;}
    h1   {color: blue;}
    p    {color: red;}
    </style> -->

    <title>Document</title>
</head>
<body>
    <header>My Team</header>
    <main>
        ${buildhtml(team)}
    </main>
</body>
</html>
    `;

}




    fs.writeFile("dist/index.html", htmlSheet, (err) =>
    err ? console.log(err) : console.log("Success!")
    );


buildTeam();
