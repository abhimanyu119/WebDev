// Creating a timer
function countdown(seconds) {
    var interval = setInterval(() => {
        if(seconds > 0) {
            console.log(seconds);
            seconds--;
        }
        else {
            console.log("Time's up!");
            clearInterval(interval);
        }
    }, 1000);
}
countdown(10);