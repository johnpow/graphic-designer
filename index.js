const inquirer = require("inquirer");
const fs = require("fs");
require('./lib/shapes.js');

//used documentation for max input https://www.npmjs.com/package/inquirer-maxlength-input-prompt
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt')
inquirer.registerPrompt('maxlength-input', MaxLengthInputPrompt)

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'maxlength-input',
    name: "lettersText",
    message: "What letters would you like in your graphic? (enter up to 3 characters)",
    response: "input",
    maxLength: 3
  },
  {
    name: "lettersColor",
    message: "What color should the letters be? (enter a color keyword OR a hexadecimal number)",
    response: "input",
  },
  {
    name: "graphicShape",
    message: "Which shape would you like?",
    type: "rawlist",
    choices: [
      'Circle','Triangle','Square'
    ],
  },
  {
    name: "graphicColor",
    message: "What color should the shape be? (enter a color keyword OR a hexadecimal number)",
    response: "input",
  },
];

//Create a function to write SVG file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log("Error", err);
      return;
    }
    console.log("success");
  });
}

function init() {
  inquirer.prompt(questions).then((answers) => {

    if (answers.graphicShape === 'Triangle') {
        const shape = new Triangle();
        shape.setColor(graphicColor);
        console.log(shape);
        console.log(shape.render());
        return;
    } else if (answers.graphicShape === 'Cirle')  {
      const shape = new Circle();
      shape.setColor(graphicColor);
      return console.log(shape);
      // console.log(shape.render());
    }
    console.log(shape)
    // const shape = new Triangle();
    // console.log(shape)
    // shape.setColor('blue')
    // return writeFile('./dist/post.html', html);
    
    // writeToFile("./outputs/README.md", gm.generateShape(answers));

  });
}

init();
