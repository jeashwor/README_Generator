// indicate npm modules needed for code base.
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write a brief project description.",
    },
    {
        type: "input",
        name: "installInstructions",
        message: "List instructions for install of this application. (For multiple steps separate statements with a - followed by a space '- ')",
    },
    {
        type: "input",
        name: "usageInfo",
        message: "Provide instructions and examples for use.",
    },
    {
        type: "input",
        name: "contributionGuidelines",
        message: "Describe guidelines for how others can contribute to this project. (Hit enter to add Contributor Covenant v2.0 as default.)",
        default: "[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](https://www.contributor-covenant.org/)"
    },
    {
        type: "input",
        name: "testInstructions",
        message: "List out any test created for this application and how to run them. (For multiple steps separate statements with a - followed by a space '- ')",
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
        message: "Enter your github username.",
    },
    {
        type: "input",
        name: "userEmail",
        message: "Enter your email address."
    },
    {
        type: "input",
        name: "screenShot",
        message: "File path for project screen shot. (ex. ./assets/screenshot.png)"
    }
]

// function to generate license data based on license choice in prompt
function generateLicense(data) {
    return new Promise(function (resolve, reject) {
        if (data.license === "MIT") {
            licenseBadge = "https://img.shields.io/badge/license-MIT-brightgreen";
            licenseText = "Application licensed under MIT.  For more information see https://opensource.org/licenses/MIT";
            resolve(licenseBadge, licenseText);
        } else if (data.license === "Apache-2.0") {
            licenseBadge = "https://img.shields.io/badge/license-Apache_2.0-brightgreen";
            licenseText = "Application licensed under Apache Version 2.0.  For more information see http://www.apache.org/licenses";
            resolve(licenseBadge, licenseText);
        } else if (data.license === "GNU GPLv3") {
            licenseBadge = "https://img.shields.io/badge/license-GNU_GPLv3-brightgreen";
            licenseText = "Application licensed under General Public License Version 3.  For more information see https://www.gnu.org/licenses/gpl-3.0.html";
            resolve(licenseBadge, licenseText);
        } else if (data.license === "GNU AGPLv3") {
            licenseBadge = "https://img.shields.io/badge/license-GNU_AGPLv3-brightgreen";
            licenseText = "Application licensed under AFFERO General Public License Version 3.  For more information see https://www.gnu.org/licenses/agpl-3.0.en.html";
            resolve(licenseBadge, licenseText);
        } else {
            return reject(err);
        };

    })
};

// function to write README file
function writeToFile(fileName, data) {
    const licenseBadge = "";
    const licenseText = "";
    generateLicense(data)
        .then(function (data) {
        })
        .catch(function (err) {
            console.log(err);
        });
        const markDownContent = generateMarkdown(data);
        fs.writeFile(fileName, markDownContent, (err) => {
            if (err) throw err;
            console.log("Your README.md file has been saved!");
        });
};

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            writeToFile("newFile/README.md", data);
});
};

// function call to initialize program
init();
