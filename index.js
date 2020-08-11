// indicate npm modules needed for code base.
var inquirer = require("inquirer");
var fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = ["What is your project title?", "Write a brief project description.", "List instructions for install of this application. (For multiple steps separate statements by commas)", "Describe usage information.", "Describe any contribution guidelines necessary for use of application.", "List test instructions for user as necessary. (For multiple steps separate statements by commas)", "Choose license to represent application.", "Enter your github username", "Enter your email address.", "File path for project screen shot. (ex. ./assets/screenshot.png)"];

const licenseChoices = ["MIT", "Apache-2.0", "GNU GPLv3", "GNU AGPLv3"];

const fileName = "README.md";
const defaultMessage = "You will need to come back to this later for a professional looking README.md!";

// const to store license choice results
let userLicenseChoice = "";
let licenseText = "";

// function to write README file
function writeToFile(fileName, data) {
    const markDownContent = generateMarkdown(data);
    fs.writeFile(fileName, markDownContent, (err) => {
        if (err) throw err;
        console.log("File has been saved!");
    });
};

// function to initialize program
function init() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "title",
                message: questions[0],
                default: defaultMessage
            },
            {
                type: "input",
                name: "description",
                message: questions[1],
                default: defaultMessage
            },
            {
                type: "input",
                name: "installInstructions",
                message: questions[2],
                default: defaultMessage
            },
            {
                type: "input",
                name: "usageInfo",
                message: questions[3],
                default: defaultMessage
            },
            {
                type: "input",
                name: "contributionGuidelines",
                message: questions[4],
                default: defaultMessage
            },
            {
                type: "input",
                name: "testInstructions",
                message: questions[5],
                default: defaultMessage
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
                message: questions[7]
            },
            {
                type: "input",
                name: "userEmail",
                message: questions[8]
                // Validate correct email format if you have time.
            },
            {
                type: "input",
                name: "screenShot",
                message: questions[9]
            }
        ])
        .then(function (data) {
            writeToFile("README.md", data);
        });
};

// function call to initialize program
init();
