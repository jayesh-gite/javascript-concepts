function debounce(fn, time) {
    var timer;
    return function () {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, time)
    }
}

function _shouldFireOnlyOnce() {
    console.log("hellow world");
    let j = 0
    while (j < 10000000000) {
        j++;
    }
}

console.log(new Date().toISOString());
var _shouldFireOnlyOnce = debounce(_shouldFireOnlyOnce, 350);
for (var i = 0; i < 10; i++) {
    _shouldFireOnlyOnce();
}