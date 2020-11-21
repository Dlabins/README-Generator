// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licensing](#licensing)
  - [Contributions](#contributions)
  - [Test](#test)

  ## Description
  ${data.descriptions}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licensing
  ${data.licensing}
  ## Contributions
  ${data.contributions}
  ## Test
  ${data.test}

  `;
  }
  
  module.exports = generateMarkdown;
  