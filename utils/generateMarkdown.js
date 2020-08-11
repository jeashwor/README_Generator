// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ${data.description}
    place screen shot here
    ## Table of Contents
    [Installation](#installation-instructions)
    [Usage](#usage-instructions)
    [License](#license)
    [Contributing](#contributing)
    [Test](#test-instructions)


`;
}

module.exports = generateMarkdown;
