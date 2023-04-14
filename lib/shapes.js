

class Shape {
  constructor(lettersText, lettersColor,graphicColor) {
    this.lettersText = lettersText;
    this.lettersColor = lettersColor;
    this.graphicShape = graphicShape;
    this.graphicColor = graphicColor;
  }
    setColor(graphicColor) {
      this.color = color; 
    };
};
class Triangle extends Shape {
  constructor(lettersText, lettersColor, graphicColor) {
    super(lettersText, lettersColor,graphicColor);

  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
}

class Circle extends Shape {
  constructor(lettersText, lettersColor, graphicShape,graphicColor) {
    super(lettersText, lettersColor, graphicShape,graphicColor);

  }
  render() {
    return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
  }
}



// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.projTitle}\n
//   ${renderLicenseBadge(data.licensePref)}

// ## Description
// ${data.projDesc}

// ## Table of Contents
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributing](#contributing)
// - [Tests](#tests)
// - [Questions](#questions)

// ## Installation
// ${data.instInstruct}
// ## Usage
// ${data.useInfo}
// ## License
// ${renderLicenseSection(data.licensePref)}
// ## Contributing
// ${data.contGuide}
// ## Tests
// ${data.testInstr}
// ## Questions
// Find me on Github: [${data.gitHub}](https://github.com/${data.gitHub})\n
// Or email me: [${data.emailAddr}](mailto:${data.emailAddr})
// `;
// }

module.exports = {Triangle,Circle};
