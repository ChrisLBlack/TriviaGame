$(document).ready(function () {


    var timeLeft = 30;
    var countTime = document.getElementById("countdown");

    document.getElementById("start").onclick = function () {
        countDown();
        setInterval(countDown, 1000);
        questions();
    }

    function countDown() {
        if (timeLeft === 0) {

        } else {
            countTime.innerHTML = ("<h3>Time Remaining: " + timeLeft + "</h3");
            timeLeft--;
        }
    }

    var triviaQuestions = ["Which is the only member of Pink Floyd to play on all of their albums?", "Second Question that's really long?"];
    var triviaAnswers = ["this is an answer, this is an answer, and this is an answer", "these are answers too, these as well, yep these too"]

    function questions () {
        for (i = 0; i < triviaQuestions.length && triviaAnswers.length; i++){
            $(".questions").append("<ol>" + triviaQuestions[i] + "</br>" + triviaAnswers[i]);
        }
    }
    //add in trivia questions and buttons

    //add in if questions are right or wrong.  This may be able to be done with one function







});