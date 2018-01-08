console.time('1t');
var arr  = [];

for(var i=0; i<10000000; i++) {
    arr[i] = (i-1)*2;
}

console.timeEnd('1t');