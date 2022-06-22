player1_name = localStorage.getItem("Player_1");
player2_name = localStorage.getItem("Player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + ":";

document.getElementById("player2_name").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("question_player").innerHTML = "Question Turn - " + player1_name;
document.getElementById("answer_player").innerHTML = "Answer Turn - " + player2_name;


function send(){
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);

    question_number = "<h4>" + number_1 + " x " + number_2 + "</h4>";
    ibox = "<br>Answer : <input type='text' id='input_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + ibox  + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}

questionTurn = "player1";
answerTurn = "player2";

function check(){
    get_answer = document.getElementById("input_box").value;
    console.log("Answer  = " + get_answer);

    if(get_answer == actual_answer){
        if(answerTurn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }

    }
    if(questionTurn == "player1"){
        questionTurn = "player2";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        questionTurn = "player1";
        document.getElementById("question_player").innerHTML = "Question Turn - " + player1_name;
    }
    if(answerTurn == "player1"){
        answerTurn = "player2";
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answerTurn = "player1";
        document.getElementById("answer_player").innerHTML = "Answer Turn - " + player1_name;
    }
    document.getElementById("output").innerHTML = "";
}


