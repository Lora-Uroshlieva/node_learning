var timeout = setTimeout(function () {
    console.log('timeout example after 5 sec')
}, 5000);

var i = 0;
var interval = setInterval(function () {
    console.log('interval - ', i);
    i++;
    if (i==20) {clearInterval(interval)};
}, 1000);
