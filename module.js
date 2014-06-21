var MyModule = function() {
    this.myMethod = function(flag) {
        console.log("Hello world");

        if(flag){
          return null;
        }

        return "Hello world";


    };
};

module.exports = MyModule;
