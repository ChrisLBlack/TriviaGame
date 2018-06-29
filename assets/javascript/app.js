$(document).ready(function () {
    // var timeLeft = 0;

    // HTMLButtonElement.addEventListener("click", setTimeout(timeStart, 1000 *30));

    document.getElementById("start").onclick = function () {
        setTimeout(1000 * 30);
        console.log("it works");
    }

    // function timeStart (){
    //     timeLeft = 
    //     $("#start").html("<h2>Time Remaining: " + timeLeft);
    // }

    // $("#start").on("click", timeStart());




});