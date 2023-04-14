

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
    //modified shape size to better fit letters
    return `<polygon points="150,0 253,182 47,182" fill="${this.color}" />`;
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




module.exports = { Triangle, Circle, Square };
