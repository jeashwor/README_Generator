// indicate npm modules needed for code base.
var inquirer = require("inquirer");
var fs = require('fs');

// array of questions for user
const questions = ["What is your project title?", "Write a brief project description.", "List instructions for install of this application. (For multiple steps separate statements by commas)", "Describe usage information.", "Describe any contribution guidelines necessary for use of application.", "List test instructions for user as necessary. (For multiple steps separate statements by commas)", "Choose license to represent application.", , "Enter your github username", "Enter your email address."];

const licenseChoices = ["MIT", "Apache-2.0", "GNU GPLv3", "GNU AGPLv3"];

const fileName = "README.md";

// const to store license choice results
let userLicenseChoice = "";
let licenseText = "";

// function to write README file
function writeToFile(fileName, data) {
};

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "projectTitle",
                message: questions[0]
            },
            {
                type: "input",
                name: "description",
                message: questions[1]
            },
            {
                type: "input",
                name: "installInstructions",
                message: questions[2]
            },
            {
                type: "input",
                name: "usageInfo",
                message: questions[3]
            },
            {
                type: "input",
                name: "contributionGuidelines",
                message: questions[4]
            },
            {
                type: "input",
                name: "testInstructions",
                message: questions[5]
            },
            {
                type: "list",
                name: "license",
                message: questions[6],
                choices: [
                    licenseChoices[0],
                    licenseChoices[1],
                    licenseChoices[2],
                    licenseChoices[3],
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
                // Validate correct email format if you have time.
            }
        ])
};

// function call to initialize program
init();
