var fs = require('fs');
var utils = require('util');

var user = {
    fname: 'Jon',
    lname: 'Snou',
    age: 25,
    position: 'king of the North'
};

var content = utils.format('%j', user);

fs.writeFile('text.txt', content, function (err) {
    if(err) {
        console.log(err);
        return;
    }
});

fs.appendFile('text.txt', content, function (err) {
    if(err) {
        console.log(err);
        return;
    }
});

// console.log(fs.exists('./text.txt'));