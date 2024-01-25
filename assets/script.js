//getting all requiered elements//
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .timer_sec");
const time_line = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector("header .time_text");
const next_btn = quiz_box.querySelector("next_btn");

const option_list = document.querySelector(".option_list");

//If start quiz button clicked//
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");//show the info box//
}

//If exit button clicked//
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info//
}

//If continue button clicked//
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");  //hide the info//
    quiz_box.classList.add("activeQuiz"); //show the quiz box//
    showQuestions(0);
    queCounter(1);
    startTimer(20);
    startTimerLine(0);
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

//If Next button clicked//
next_btn.onclick = ()=>{
    if(quest_count > questions.length - 1){
    quest_count++;
    quest_numb++;
    showQuestions(quest_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
    timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions completed");
        showResultBox();
    }
}

var quest_count = 0;
var que_numb = 1;
var counter;
var counterLine;
var timeValue = 20;
var widthValue = 0;
var userScore = 0;
showQuestions(quest_count);
queCounter(que_numb);
clearInterval(counter);
startTimer(timeValue);
clearInterval(counterLine);
startTimerLine(widthValue);
next_btn.style.display = "none";
timeOff.textContent = "time Left";

const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    var quest_count = 0;
    var que_numb = 1;
    var timeValue = 20;
    var widthValue = 0;
    var userScore = 0;
    showQuestions(quest_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
}

//creating an array and passing the number, question, options and answer//
var question = [
    {
        numb: 1,
        question: "What is the name of Wendy's dog in Peter Pan?",
        answer: "Nana"
        options: [
            'Lazy',
            'Pinky',
            'Emma',
            'Nana',
        ]
    },
    {
        numb: 2,
        question: "What is the name of Andy's neighbor in Toy Story?",
        answer: "Sid"
        options: [
            "Edd",
            "Jonny",
            "Sid",
            "Ron",
        ]
    },
    {
        numb: 3,
        question: "How many brothers does Prince Hans of the Southern Isles have in Frozen?",
        answer: "12"
        options: [
            "10",
            "12",
            "14",
            "8",
        ]
    },
    {
        numb: 4,
        question: "What does 'Hakuna Matata' mean?",
        answer: "No Worries"
        options: [
            "No Worries",
            "Fun Times",
            "Danger",
            "GO go go",
        ]
    },
    {
        numb: 5,
        question: " Who is the fashion designer in The Incredibles?",
        answer: "Edna Mode"
        options: [
            "Anastasia",
            "Drizella",
            "Edna MOde",
            "Melody",
        ]
    },
    {
        numb: 6,
        question: "Who is Mufasa's trusted advisor in The Lion King?",
        answer: "Zazu"
        options: [
            "Rafiki",
            "Scar",
            "Timon",
            "Zazu",
        ]  
    },
    {
        numb: 7,
        question: "Which Disney Princess attended Elsa's coronation day in Arendelle?",
        answer: "Rapunzel"
        options: [
            "Rapunzel",
            "Cinderella",
            "Belle",
            "Jazmine",
        ]    
    },
    {
        numb: 8,
        question: "What is the name of Belle's father in Beauty and the Beast?",
        answer: "Maurice"
        options: [
            "John",
            "Maurice",
            "Peter",
            "Damian",
        ]  
    },
]

const next_btn = quiz_box.querySelector("next_btn");


//getting questions and options from array//
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    var que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'<span>';
    var option_tag = '<div class="option">'+ questions[index].options[0] +'<span><span></div>'
                     +'<div class="option">'+ questions[index].options[1] +'<span><span></div>'
                     +'<div class="option">'+ questions[index].options[2] +'<span><span></div>'
                     +'<div class="option">'+ questions[index].options[3] +'<span><span></div>'
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (var i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    var userAns = answer.textContent;
    var correctAns = questions[quest_count].answer;
    var allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is Correct");
    }else{
        answer.classList.add("incorrect");
        console.log("Wrong Answer");
    }
    
    //if answer is incorrect then automtically selected the correct answer//
    for (var i = 0; < allOptions; i++) {
        if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
        }
    }



function queCounter(index){
const bottom_ques_counter = quiz_box.querySelector(".total_quest");
var totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span>';
bottom_ques_counter.innerHTML = totalQuesCountTag;
}

     //once user selected disable all options//
    for (var i = 0; i < allOptions; ii++) {
    option_list.children[i].classList.add("disable");
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_box.classList.remove("activeInfo");//hide the info box//
    quiz_box.classList.remove("activeQuiz");//hide the quiz box//
    result_box.classList.add("activeResult");//show the result box//
    var scoreText = result_box.querySelector(".score_text");
    if(userScore > 3){
        var scoreTag = '<span>and congrats! You got <p>'+ userScore +'</p> out of <p>'+ quest_length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        var scoreTag = '<span>and nice, You got <p>'+ userScore +'</p> out of <p>'+ quest_length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        var scoreTag = '<span>and sorry, You only <p>'+ userScore +'</p> out of <p>'+ quest_length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            var addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
        clearInterval(counter);
        timeCount,textContent = 00;
        timeOff.textContent = "Time Off";

        var correctAns = questions[quest_count].answer;
        var allOptions = option_list.children.length;

        for (var i = 0; i < allOptions; i++){
        if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
        }
        for (var i = 0; i < allOptions; ii++) {
            option_list.children[i].classList.add("disable");
            }
            next_btn.style.display = "block";
    }
    }
    }
}

function startTimerLine(){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeLine.style.width = time + "px";
        if(time > 549){
        clearInterval(counterLine);
        }
    }
}
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    var totalQuesCountTag = '<span><p>'+ index +'</p>of<p>'+ quest_length +'</p>Question</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}



