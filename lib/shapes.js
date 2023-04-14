

class Shape {
  constructor(lettersText, lettersColor,graphicColor) {
    this.lettersText = lettersText;
    this.lettersColor = lettersColor;
    this.graphicColor = graphicColor;
  }
    setColor(color) {
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

class Square extends Shape {
  constructor(lettersText, lettersColor, graphicColor) {
    super(lettersText, lettersColor,graphicColor);

  }
  render() {
    return `<rect x="70" y="25" width="160" height="160" fill="${this.color}" />`;
  }
};



function generateGraphic(shape) {
  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  ${shape.render()}

  <text x="150" y="120" font-size="60" text-anchor="middle" fill="${shape.lettersColor}">${shape.lettersText}</text>

</svg>
`
}

module.exports = { Triangle, Circle, Square, generateGraphic };
