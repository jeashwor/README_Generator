// function to generate markdown for README
function generateMarkdown(data) {
return `# ${data.title}
![license badge](${licenseBadge})

## Description
  
${data.description}
  
![screen shot](${data.screenShot})
  
### Table of Contents
  
* [Installation](installation-instructions)
  
* [Usage](#usage-instructions)
  
* [License](#license)
  
* [Contributing](#contributing)
  
* [Test](#test-instructions)
  
* [Questions](#questions)
  
  
### Installation Instructions

* ${data.installInstructions.replace(/, /g, "\n* ")}

### Usage Instructions

     ${data.usageInfo}

### License

     ${licenseText}

### Contributing

     ${data.contributionGuidelines}

### Test

* ${data.testInstructions.replace(/, /g, "\n* ")}

### Questions

     GitHub Username: [${data.userName}](https://github.com/${data.userName})

     If you have additional questions please email me at that following link.  [Email Me!](${data.userEmail})
`;
}

module.exports = generateMarkdown;
