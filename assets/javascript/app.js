$(document).ready(function () {
    var timeLeft = 30;
    var countTime = document.getElementById("countdown");
    // var timerID = setInterval(countDown, 1000);

    document.getElementById("start").onclick = function () {
        countDown();
        console.log(timeLeft);
        var timerID = setInterval(countDown, 1000);
       
    }

    function countDown() {
        if (timeLeft === 0) {
            clearTimeout(timerID);
        } else {
            countTime.innerHTML = "Time Remaining: " + timeLeft;
            timeLeft--;
        }
    }
   


 ;




});