$(document).ready(function () {


    var timeLeft = 60;
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

    var triviaQuestions = ["Which is the only member of Pink Floyd to play on all of their albums?", "What is Syd Barretts real name?", "Which are the three animals featured on Pink Floyd's 'Animals' album?", "Who was the original lead guitarist for Pink Floyd?",
        "What song off Pink Floyd's first album didn't have any lyrics?", "When was Roger Waters born?", "Who uttered the only lyrics for Pink Floyd's 'One of These Days'?"
    ];
    var triviaAnswers = ["this is an answer", "this is an answer", "and this is an answer", "these are answers too", "these as well, yep these too"]

    function questions() {
        for (i = 0; i < triviaQuestions.length && triviaAnswers.length; i++) {
            $(".questions").append(("<h4>" + triviaQuestions[i]) + "</h4>" + "</br>" + ("<ul>" + "<input type='radio'>" + triviaAnswers[i]));
        }
    }


    //add in trivia questions and buttons

    //add in if questions are right or wrong.  This may be able to be done with one function







});