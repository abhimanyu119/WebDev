// Printing random number every 2 seconds for 5 times
function countdown(instance) {
    var interval = setInterval(() => {
        function randomNumber() {
            var num = Math.floor(Math.random() * 10) + 1;
            return num;
            }            
        if(instance > 0) {
            console.log(randomNumber());
            instance--;
        }
        else {
            clearInterval(interval);
        }
    }, 2000);
}
countdown(5);