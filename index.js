// the required modules
const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

// creates an array of questions for user

const questions = [
    {
        type: 'input',
        message: 'What is the EMPLOYEE ID?',
        name: 'employeeId',
    },
];

// this is the write to file function

function writeToFile(src) {
    fs.writeFile('./dist/index.html', src, (err) =>
        err ? console.error(err) : console.log('HTML file saved as index.html in src folder')
    )
}

// the initialization function

function init() {
    inquirer
        .prompt(questions)
        .then((responses) => writeToFile(generateHTML(responses)));
}

// calls the initialization function

init();