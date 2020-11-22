// function to generate markdown for README with table of contents 
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Licensing](#licensing)
  - [Contributions](#contributions)
  - [Test](#test)
  - [Questions](#questions)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Licensing
  ![License: ${data.license}](https://img.shields.io/badge/license-${data.license}-blueviolet.svg)
  ## Contributions
  ${data.contributions}
  ## Test
  ${data.test}
  ## Questions
  You can get in touch with me on Github at https://github.com/${data.questionsGithub}.
  If you would like to reach me via email, please send a message to ${data.questionsEmail}.
 `;
  }
  
  module.exports = generateMarkdown;
  