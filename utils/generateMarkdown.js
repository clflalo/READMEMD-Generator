//  creates license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === ""){
    return;
  } else if (license === "MIT"){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === "Apache License 2.0"){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } else if (license === "Mozilla Public License 2.0"){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  } else if (license === "GNU GPL V3"){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } else {
    return ""
  }
} 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## License 
-${data.license}
-${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents


## Tests

* ${data.test}

GitHub: [${data.username}](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;
