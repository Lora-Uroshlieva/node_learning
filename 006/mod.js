console.log('test module!!!');
var number = 1;

function hello() {
    console.log('hi, user!')
}

module.exports = {
    variable: number,
    sayHello: hello
};