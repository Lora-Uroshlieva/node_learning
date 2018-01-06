var x = 10;

function test() {
    console.log('test function. number = ', x);
}

// exports.number = x;
// exports.func = test;

this.number = x;
this.func = test;