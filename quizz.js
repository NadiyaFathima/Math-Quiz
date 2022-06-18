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
