$(document).ready(function () {


    var timeLeft = 90;
    var countTime = document.getElementById("countdown");

    var correctGuess = 0;
    var wrongGuess = 0;
    var notAnswered = 0;

    //when start button is clicked
    document.getElementById("letsGo").onclick = function () {
        countDown();
        setInterval(countDown, 1000);
        questions();

    }

    
    //Starts the clock and adds the time to the page
    function countDown() {
        if (timeLeft === 0) {
            timeLeft = -1;
            allDone();

        } else if (timeLeft > 0){
            countTime.innerHTML = ("<h3>Time Remaining: " + timeLeft + " Seconds Left!" + "</h3");
            timeLeft--;
        } else if (timeLeft === -1){
            countTime.innerHTML = ("<h2>Time's Up!")
        }
        return
    }
    
    // All of the trivia answers and questions in radio button forms to be loaded to the page
    var triviaAnswers = [{

            question: "Which is the only member of Pink Floyd to play on all of their albums?",
            a: "<input type='radio' name='one' id='one' value='1'>Richard Wright",
            b: "<input type='radio' name='one' value='0' class='notOne'>David Gilmour",
            c: "<input type='radio' name='one' value='0' class='notOne'>Nick Mason",
            d: "<input type='radio' name='one' value='0' class='notOne'>Roger Waters",
            correct: "a"
        },
        {
            question: "What was the name of the dog included on the Pink Floyd album 'Meddle'?",
            a: "<input type='radio' name='two' value='0' class='notTwo'>Syd",
            b: "<input type='radio' name='two' value='0' class='notTwo'>Scotty",
            c: "<input type='radio' name='two' value='0' class='notTwo'>Sercy",
            d: "<input type='radio' name='two' id='two' value='1'>Seamus",
            correct: "d"

        },
        {
            question: "Which are the three animals featured on Pink Floyd's 'Animals' album?",
            a: "<input type='radio' name='three' value='0' class='notThree'>Dogs, Snakes, Pigs",
            b: "<input type='radio' name='three' value='0'class='notThree'>Snakes, Cattle, Cats",
            c: "<input type='radio' name='three' value='0'class='notThree'>Dogs, Cats, Sheep ",
            d: "<input type='radio' name='three' value='1' id='three'>Dogs, Pigs, Sheep ",
            correct: "d"

        },

        {
            question: "Who was the original lead guitarist for Pink Floyd?",
            a: "<input type='radio' name='four' value='0' class='notFour'>Bill Bailey",
            b: "<input type='radio' name='four' value='0' class='notFour'>Mickey Lee Soule",
            c: "<input type='radio' name='four' value='0' class='notFour'>David Gilmour",
            d: "<input type='radio' name='four' value='1' id='four'>Syd Barrett",
            correct: "d"

        },
        {
            question: "What song off Pink Floyd's first album didn't have any lyrics?",
            a: "<input type='radio' name='five' value='0' class='notFive'>Astronomy Domine",
            b: "<input type='radio' name='five' value='1' id='five'>Interstellar Overdrive",
            c: "<input type='radio' name='five' value='0' class='notFive'>Gnome",
            d: "<input type='radio' name='five' value='0' class='notFive'>Wish You Were Here",
            correct: "b"

        },
        {
            question: "When was Roger Waters born?",
            a: "<input type='radio' name='six' value='1' id='six'>1943",
            b: "<input type='radio' name='six' value='0' class='notSix'>1939",
            c: "<input type='radio' name='six' value='0' class='notSix'>1945",
            d: "<input type='radio' name='six' value='0' class='notSix'>1948",
            correct: "a"

        },
        {
            question: "Who uttered the only lyrics for Pink Floyd's 'One of These Days'?",
            a: "<input type='radio' name='seven' value='0'class='notSev'>Roger Waters",
            b: "<input type='radio' name='seven' value='1' id='sev'>David Gilmour",
            c: "<input type='radio' name='seven' value='0' class='notSev'>Nick Mason",
            d: "<input type='radio' name='seven' value='0' class='notSev'>Rick Wright",
            correct: "b"

        },
        {

            question: "In what year was the movei 'Pink Floyd The Wall' made?",
            a: "<input type='radio' name='eight' value='1' id='eight'> 1982",
            b: "<input type='radio' name='eight' value='0' class='notEight'>1973",
            c: "<input type='radio' name='eight' value='0' class='notEight'>1994",
            d: "<input type='radio' name='eight' value='0' class='notEight'>1079",
            correct: "a"
        }



    ]
    // this is the function that loads the questions to the page when the start button is clicked
    function questions() {

        for (i = 0; i < triviaAnswers.length; i++) {
            $(".questions").append("<h4>" + triviaAnswers[i].question + "</h4>" + "</br>" + "<span>" + triviaAnswers[i].a + "<span>" + triviaAnswers[i].b + "<span>" + triviaAnswers[i].c + "<span>" + triviaAnswers[i].d + "</br>" + "</br>")

        }
        $("#submit").append("<button class='btn border border-dark start'><p class='align-middle flex id='submit'><strong>Submit</strong></p></button");

    }

    //checks answers to see if they're right, wrong, or unanswered
    function checker() {
        var oneChecked = $('#one').is(':checked');
        var oneNotChecked = $('.notOne').is(':checked');
        if (oneChecked == true) {
            correctGuess++;
        } else if (oneNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;

        }
        //-------------------Checking Second Guess--------------

        var twoChecked = $('#two').is(':checked');
        var twoNotChecked = $('.notTwo').is(':checked');
        if (twoChecked == true) {
            correctGuess++;
        } else if (twoNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
    
        } 
        //-----------------Checking Third Guess--------------
        var threeChecked = $('#three').is(':checked');
        var threeNotChecked = $('.notThree').is(':checked');
        if (threeChecked == true) {
            correctGuess++;
        } else if (threeNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }
        //-------------------Checking Fourth Guess-----------------
        var fourChecked = $('#four').is(':checked');
        var fourNotChecked = $('.notFour').is(':checked');
        if (fourChecked == true) {
            correctGuess++;
        } else if (fourNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }
        //---------------Checking Fifth Guess---------------

        var fiveChecked = $('#five').is(':checked');
        var fiveNotChecked = $('.notFive').is(':checked');
        if (fiveChecked == true) {
            correctGuess++;
        } else if (fiveNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }
        //-------------------Checking Sixth Guess--------------
        var sixChecked = $('#six').is(':checked');
        var sixNotChecked = $('.notSix').is(':checked');
        if (sixChecked == true) {
            correctGuess++;
        } else if (sixNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }
        //-----------------Checking Seventh Guess----------------

        var sevChecked = $('#sev').is(':checked');
        var sevNotChecked = $('.notSev').is(':checked');
        if (sevChecked == true) {
            correctGuess++;
        } else if (sevNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }

        //--------------Checking Eight Guess-------------------

        var eightChecked = $('#eight').is(':checked');
        var eightNotChecked = $('.notEight').is(':checked');
        if (eightChecked == true) {
            correctGuess++;
        } else if (eightNotChecked == true) {
            wrongGuess++;
        } else {
            notAnswered++;
        }

    }

    //when submit button is clicked
     document.getElementById("submit").onclick = function addEmUp(){
         timeLeft = 0;
         allDone();
     }

    function allDone(){
        checker();
        countTime.innerHTML = ("<h2>Time's Up!")
        //lists the answers on the DOM
        $(".questions").html("<h3>" + "Correct Answers: " + correctGuess + "</br>" + "<h3>" + "Incorrect Answers: " + wrongGuess + "</br>" + "Unanswered: " + notAnswered);

        $("#submit").remove();
        clearTimeout()
        return
    
    }
});