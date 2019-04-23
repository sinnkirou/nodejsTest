const myObj = {

  specialFunction(msg) { console.log(msg); },
  getAsyncData(cb) {
    cb();
  },

  render() {
    this.getAsyncData(
      this.specialFunction,
    );
    this.getAsyncData(
      this.specialFunction.bind(this, 'with bind'),
    );

    const that = this;
    this.getAsyncData(function () {
      if (this.specialFunction) {
        this.specialFunction('this triggerd');
      } else {
        console.log('this.specialFunction is not a function');
      }

      that.specialFunction('that triggerd');
    });

    this.getAsyncData(function () {
      this.specialFunction('bind triggered');
    }.bind(this));
  },
};
myObj.render();
