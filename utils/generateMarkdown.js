// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.description}
  
*place screen shot here*
  
### Table of Contents
  
* [Installation](installation-instructions)
  
* [Usage](#usage-instructions)
  
* [License](#license)
  
* [Contributing](#contributing)
  
* [Test](#test-instructions)
  
* [Questions](#questions)
  
  
### Installation Instructions

* ${data.installInstructions.replace(/, /g, "\n * ")}

### Usage Instructions

${data.usageInfo}

### License



### Contributing

${data.contributionGuidelines}

### Test

* ${data.testInstructions.replace(/, /g, "\n * ")}

### Questions

GitHub Username: [${data.userName}](https://github.com/${data.userName})

If you have additional questions please email me at that following link.  [Email Me!](${data.userEmail})
`;
}

module.exports = generateMarkdown;
