require('./test');
require('./simple');

console.log('main file is loaded');
console.log('  ');
console.log(require.cache);

console.log(__dirname);
console.log(__filename);