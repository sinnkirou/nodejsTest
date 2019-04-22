function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function () {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

SubType.prototype = new SuperType();

SubType.prototype = {
  getSubValue() {
    return this.subproperty;
  },
};

const instance = new SubType();
console.log(instance.getSuperValue()); // error
