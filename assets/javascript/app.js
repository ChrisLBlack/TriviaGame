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
            //allDone();

        } else {
            countTime.innerHTML = ("<h3>Time Remaining: " + timeLeft + "</h3");
            timeLeft--;
        }
    }

    var triviaAnswers = [{

            question: "Which is the only member of Pink Floyd to play on all of their albums?",
            a: " one   ",
            b: "two  ",
            c: "three  ",
            d: "four"
        },
        {
            question: "What is Syd Barretts real name?",
            a: "five",
            b: "six",
            c: "seven",
            d: "eight"

        },
        {
            question: "Which are the three animals featured on Pink Floyd's 'Animals' album?",
            a: "nine",
            b: "ten",
            c: "eleven",
            d: "twelve"

        },

        {
            question: "Who was the original lead guitarist for Pink Floyd?",
            a: "13",
            b: "14",
            c: "15",
            d: "16"

        },
        {
            question: "What song off Pink Floyd's first album didn't have any lyrics?",
            a: "17",
            b: "18",
            c: "19",
            d: "20"

        },
        {
            question: "When was Roger Waters born?",
            a: "21",
            b: "22",
            c: "23",
            d: "24"

        },
        {
            question: "Who uttered the only lyrics for Pink Floyd's 'One of These Days'?",
            a: "25",
            b: "26",
            c: "27",
            d: "28"

        },



    ]

    function questions() {

        for (i = 0; i < triviaAnswers.length; i++) {
            $(".questions").append("<h4>" + triviaAnswers[i].question + "</h4>" +  "</br>" + "<span>" + "<input type='radio'>" + triviaAnswers[i].a + "<input type='radio'> " + "<span>" + triviaAnswers[i].b + "<span>" + "<input type='radio'> " + triviaAnswers[i].c + "<span>" + "<input type='radio'>" + triviaAnswers[i].d)
        }
    }


    //this will be function to count answers (right or wrong) and add grade to page

    // function allDone(){

    // }








});