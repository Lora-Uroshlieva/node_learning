var path = require('path');


console.log('current file: ', path.basename(__filename));
console.log('path to simple file: ', path.resolve('./simple.js'));
console.log('current file etension: ', path.extname(__filename));
console.log(path.isAbsolute(__filename));
console.log(path.isAbsolute('./test'));
console.log(path.join(__dirname, 'mydir', 'test', 'test1', 'file.txt'));
console.log(path.parse(__filename));
console.log(path.sep);