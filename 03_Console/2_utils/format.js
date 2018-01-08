var utils = require('util');

var user = {
    name: 'john',
    age: 20,
    salary: 100,
    bonus: 15
};
var str = utils.format('hello, my name is %s, i am %d years old. my salary is %s, bonuse: %d%%', user.name, user.age,
    user.salary, user.bonus);

console.log(str);

