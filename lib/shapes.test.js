const {Triangle, Circle, Square} = require('./shapes.js');

describe('Triangle', () => {

  describe('Triangle details', () => {
    it('should return the expected shape and color', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150,0 253,182 47,182" fill="blue" />');
    });
  });
});

describe('Circle', () => {

  describe('Circle details', () => {
    it('should return the expected shape and color', () => {
      const shape = new Circle();
      shape.setColor("#FFC300");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="#FFC300" />');
    });
  });
});

describe('Square', () => {

  describe('Square details', () => {
    it('should return the expected shape and color', () => {
      const shape = new Square();
      shape.setColor("black");
      expect(shape.render()).toEqual('<rect x="70" y="25" width="160" height="160" fill="black" />');
    });
  });
});
