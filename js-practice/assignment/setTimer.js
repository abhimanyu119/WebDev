// Creating a timer using setInerval and clearInterval
var count = 0;
var timer = setInterval(() => {
    console.log(count);
    count++;
    if (count > 10) {
    clearInterval(timer);
    }
}, 1000);