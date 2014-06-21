var MyModule = require('./module');

describe("My module", function() {

  it("answers to myMethod() correctly", function() {
    var instance = new MyModule();
    expect(instance.myMethod()).toEqual("Hello world");
  });

  // it("answers to myMethod() correctly with flag", function() {
  //   var instance = new MyModule();
  //   expect(instance.myMethod(true)).toBeNull();
  // });

  it("logs to console", function() {
    var instance = new MyModule();
    spyOn(console, 'log');
    instance.myMethod();
    expect(console.log).toHaveBeenCalledWith("Hello world");
  });
});
