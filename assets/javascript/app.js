$(document).ready(function () {
    var timeLeft = 30;
    var countTime = document.getElementById("countdown");
    // var timerID = setInterval(countDown, 1000);

    document.getElementById("start").onclick = function () {
        countDown();
        console.log(timeLeft);
        setInterval(countDown, 1000);
       
    }

    function countDown() {
        if (timeLeft === 0) {
            
        } else {
            countTime.innerHTML = ("<h3>Time Remaining: " + timeLeft + "</h3");
            timeLeft--;
        }
    }
   


 ;




});