/* eslint-disable no-useless-constructor */
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(`${this.name} makes a noise.`);
};

class Dog extends Animal {
  constructor(...args) {
    super(...args);
  }

  speak() {
    super.speak();
    console.log(`${this.name} barks.`);
  }
}

const d = new Dog('Mitzie');
d.speak();
