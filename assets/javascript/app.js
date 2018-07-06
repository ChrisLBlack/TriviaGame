$(document).ready(function () {


    var timeLeft = 120;
    var countTime = document.getElementById("countdown");

    document.getElementById("letsGo").onclick = function () {
        countDown();
        setInterval(countDown, 1000);
        questions();


    }




    function countDown() {
        if (timeLeft === 0) {
            //allDone();

        } else {
            countTime.innerHTML = ("<h3>Time Remaining: " + timeLeft + " Seconds Left!" + "</h3");
            timeLeft--;
        }
    }

    var triviaAnswers = [{

            question: "Which is the only member of Pink Floyd to play on all of their albums?",
            a: "<input type='radio' name='one' value='1' class='one'>Richard Wright",
            b: "<input type='radio' name='one' value='0'>David Gilmour",
            c: "<input type='radio' name='one' value='0'>Nick Mason",
            d: "<input type='radio' name='one' value='0'>Roger Waters",
            correct: "a"
        },
        {
            question: "What was the name of the dog included on the Pink Floyd album 'Meddle'?",
            a: "<input type='radio' name='two'>Syd",
            b: "<input type='radio' name='two'>Scotty",
            c: "<input type='radio' name='two'>Sercy",
            d: "<input type='radio' name='two'>Seamus",
            correct: "d"

        },
        {
            question: "Which are the three animals featured on Pink Floyd's 'Animals' album?",
            a: "<input type='radio' name='three'>Dogs, Snakes, Pigs",
            b: "<input type='radio' name='three'>Snakes, Cattle, Cats",
            c: "<input type='radio' name='three'>Dogs, Cats, Sheep ",
            d: "<input type='radio' name='three'>Dogs, Pigs, Sheep ",
            correct: "d"

        },

        {
            question: "Who was the original lead guitarist for Pink Floyd?",
            a: "<input type='radio' name='four'>Bill Bailey",
            b: "<input type='radio' name='four'>Mickey Lee Soule",
            c: "<input type='radio' name='four'>David Gilmour",
            d: "<input type='radio' name='four'>Syd Barrett",
            correct: "d"

        },
        {
            question: "What song off Pink Floyd's first album didn't have any lyrics?",
            a: "<input type='radio' name='five'>Astronomy Domine",
            b: "<input type='radio' name='five'>Interstellar Overdrive",
            c: "<input type='radio' name='five'>Gnome",
            d: "<input type='radio' name='five'>Wish You Were Here",
            correct: "b"

        },
        {
            question: "When was Roger Waters born?",
            a: "<input type='radio' name='six'>1943",
            b: "<input type='radio' name='six'>1939",
            c: "<input type='radio' name='six'>1945",
            d: "<input type='radio' name='six'>1948",
            correct: "a"

        },
        {
            question: "Who uttered the only lyrics for Pink Floyd's 'One of These Days'?",
            a: "<input type='radio' name='seven'>Roger Waters",
            b: "<input type='radio' name='seven'>David Gilmour",
            c: "<input type='radio' name='seven'>Nick Mason",
            d: "<input type='radio' name='seven'>Rick Wright",
            correct: "b"

        },
        {

            question: "In what year was the movei 'Pink Floyd The Wall' made?",
            a: "<input type='radio' name='eight'> 1982",
            b: "<input type='radio' name='eight'>1973",
            c: "<input type='radio' name='eight'>1994",
            d: "<input type='radio' name='eight'>1079",
            correct: "a"
        }



    ]




    function questions() {

        for (i = 0; i < triviaAnswers.length; i++) {
            $(".questions").append("<h4>" + triviaAnswers[i].question + "</h4>" + "</br>" + "<span>" + triviaAnswers[i].a + "<span>" + triviaAnswers[i].b + "<span>" + triviaAnswers[i].c + "<span>" + triviaAnswers[i].d + "</br>" + "</br>")

        }
        $("#submit").append("<button class='btn border border-dark start'><p class='align-middle flex id='submit'><strong>Submit</strong></p></button");
        $('input[type=radio').click(function(){
            // alert(this.value);
            if (this.value == 1){
                console.log("right!");
            }else {
                console.log("wrong")
            }
        })

    }

     document.getElementById("submit").onclick = function allDone(){
         console.log('it works');

    // $("#one").click = function () {
    //         if ($("#one").checked) {
    //             console.log("this works")
    //             correctGuess++;
        
    //         } else {
    //             console.log("wut?")
    //             wrongGuess++;
    //         }
    //     }

     }
    var correctGuess = 0;
    var wrongGuess = 0;


    




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