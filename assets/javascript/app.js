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
            a: "<input type='radio' name='one'> one",
            b: "<input type='radio' name='one'> two",
            c: "<input type='radio' name='one'>three  ",
            d: "<input type='radio' name='one'>four", 
            correct: "a"
        },
        {
            question: "What is Syd Barretts real name?",
            a: "<input type='radio' name='two'>five",
            b: "<input type='radio' name='two'>six",
            c: "<input type='radio' name='two'>seven",
            d: "<input type='radio' name='two'>eight"

        },
        {
            question: "Which are the three animals featured on Pink Floyd's 'Animals' album?",
            a: "<input type='radio' name='three'>nine",
            b: "<input type='radio' name='three'>ten",
            c: "<input type='radio' name='three'>eleven",
            d: "<input type='radio' name='three'>twelve"

        },

        {
            question: "Who was the original lead guitarist for Pink Floyd?",
            a: "<input type='radio' name='four'>13",
            b: "<input type='radio' name='four'>14",
            c: "<input type='radio' name='four'>15",
            d: "<input type='radio' name='four'>16"

        },
        {
            question: "What song off Pink Floyd's first album didn't have any lyrics?",
            a: "<input type='radio' name='five'>17",
            b: "<input type='radio' name='five'>18",
            c: "<input type='radio' name='five'>19",
            d: "<input type='radio' name='five'>20"

        },
        {
            question: "When was Roger Waters born?",
            a: "<input type='radio' name='six'>21",
            b: "<input type='radio' name='six'>22",
            c: "<input type='radio' name='six'>23",
            d: "<input type='radio' name='six'>24"

        },
        {
            question: "Who uttered the only lyrics for Pink Floyd's 'One of These Days'?",
            a: "<input type='radio' name='seven'>25",
            b: "<input type='radio' name='seven'>26",
            c: "<input type='radio' name='seven'>27",
            d: "<input type='radio' name='seven'>28"

        },



    ]

    function questions() {

        for (i = 0; i < triviaAnswers.length; i++) {
            $(".questions").append("<h4>" + triviaAnswers[i].question + "</h4>" +  "</br>" + "<span>" + triviaAnswers[i].a + "<span>" + triviaAnswers[i].b + "<span>" + triviaAnswers[i].c + "<span>" + triviaAnswers[i].d)
    
        }


    }


    // function checker () {
    //     if ((triviaAnswers[0].a).checked == true){
    //         console.log("you've checked a thing");
    //     }else {
    //         console.log("it no worky");
    //     }
    // }
    // checker();


    //this will be function to count answers (right or wrong) and add grade to page

    // function allDone(){

    // }








});