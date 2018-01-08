var utils = require('util');

function Base() {
    this.name = 'base function';
}

Base.prototype.say = function () {
    console.log("hello, this is %s !", this.name);
};

function Derived() {
    this.name = 'derived function';
}

utils.inherits(Derived, Base);

Derived.prototype.getData = function () {
    console.log('some data from derived func');
};

var newDerivedObj = new Derived();

newDerivedObj.say();
newDerivedObj.getData();