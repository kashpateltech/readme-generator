// TODO: Include packages needed for this application
var inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generate = require('./utils/generateMarkdown.js');

const questions = [
    { 
    type: "input",
    message: "What is the Title of your project?",
    name: "title",  
    },
    { 
    type: "input",
    message: "What is a good Description of your project?",
    name: "description",  
    },
    {
    type: "input",
    message: "How do you Install your application?",
    name: "installation",
    },
    {
    type: "input",
    message: "How do you Use your application?",
    name: "usage",
    },
    {
    type: "checkbox",
    message: "What License did you use for this repository?",
    choices: ["MIT", "GNU General Public License 2.0", "Apache License 2.0", "GNU General Public License 3.0"],
    name: "license",
    },
    {
    type: "input",
    message: "How can people contribute to your project?",
    name: "contributing",
    },
    {
    type: "input",
    message: "What is your GitHub username?",
    name: "github"
    },
    {
    type: "input",
    message: "What is your email address where users and contributors can send questions?",
    name: "email"
    },
];

function init() {
inquirer
  .prompt(questions)
  .then((data) => {
    fs.writeFileSync(path.join(process.cwd(), "readMe.md"), generate(data));
  });
}

// Function call to initialize app
init();


    