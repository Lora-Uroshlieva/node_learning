function User(name) {
    this.name = name;
    this.sayHello = function () {
        console.log('hello, ' + this.name);
    }
}

var Jon = new User('john');
Jon.sayHello();