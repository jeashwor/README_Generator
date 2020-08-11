// indicate npm modules needed for code base.
var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "projectTitle",
        message: "What is your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief project description."
    },
    {
        type: "input",
        name: "installInstructions",
        message: "List instructions for install of this application. (For multiple steps separate statements by commas)"
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Describe usage information."
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Describe any contribution guidelines necessary for use of application."
    },
    {
        type: "input",
        name: "testInstructions",
        message: "List test instructions for user as necessary. (For multiple steps separate statements by commas)"
    },
    {
        type: "list",
        name: "license",
        message: "Choose license to represent application.",
        choices: [
            "MIT",
            "Apache-2.0",
            "GNU GPLv3",
            "GNU AGPLv3",
        ]
    },
    {
        type: "input",
        name: "userName",
        message: "Enter your github username"
    },
    {
        type: "input",
        name: "userEmail",
        message: "Enter your email address."
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
