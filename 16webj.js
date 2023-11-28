var xTurn = true;
var b1 = 0;
var b2 = 0;
var b3 = 0;
var b4 = 0;
var b5 = 0;
var b6 = 0;
var b7 = 0;
var b8 = 0;
var b9 = 0;



function click1() {
    if(document.getElementById("btn-1").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-1").innerHTML = "X";
            b1 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-1").innerHTML = "O";
            xTurn = true;
            b1 = 5;
        }
        liveCheck();
        changeTurn();
    }
}

function click2() {
    if(document.getElementById("btn-2").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-2").innerHTML = "X";
            b2 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-2").innerHTML = "O";
            xTurn = true;
            b2 = 5;
        }
        liveCheck();
        changeTurn();
    }
}

function click3() {
    if(document.getElementById("btn-3").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-3").innerHTML = "X";
            b3 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-3").innerHTML = "O";
            xTurn = true;
            b3 = 5;
        }
        liveCheck();
        changeTurn();
    }
}

function click4() {
    if(document.getElementById("btn-4").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-4").innerHTML = "X";
            b4 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-4").innerHTML = "O";
            xTurn = true;
            b4 = 5;
        }
        liveCheck();
        changeTurn();
    }
}

function click5() {
    if(document.getElementById("btn-5").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-5").innerHTML = "X";
            b5 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-5").innerHTML = "O";
            xTurn = true;
            b5 = 5;
        }
        liveCheck();
        changeTurn();
    }
}

function click6() {
    if(document.getElementById("btn-6").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-6").innerHTML = "X";
            b6 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-6").innerHTML = "O";
            b6 = 5;
            xTurn = true;
        }
        liveCheck();
        changeTurn();
    }
}

function click7() {
    if(document.getElementById("btn-7").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-7").innerHTML = "X";
            b7 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-7").innerHTML = "O";
            b7 = 5;
            xTurn = true;
        }
        liveCheck();
        changeTurn();
    }
}

function click8() {
    if(document.getElementById("btn-8").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-8").innerHTML = "X";
            b8 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-8").innerHTML = "O";
            b8 = 5;
            xTurn = true;
        }
        liveCheck();
        changeTurn();
    }
}

function click9() {
    if(document.getElementById("btn-9").innerHTML == "-"){
        if(xTurn == true){
            document.getElementById("btn-9").innerHTML = "X";
            b9 = 1;
            xTurn = false;
        }
        else{
            document.getElementById("btn-9").innerHTML = "O";
            b9 = 5;
            xTurn = true;
        }
        liveCheck();
        changeTurn();
    }
}

function checkGameOver() {
    let sum =0;
    if(b1 != 0){
        sum = sum + 1;
    }
    if(b2 != 0){
        sum = sum + 1;
    }
    if(b3 != 0){
        sum = sum + 1;
    }
    if(b4 != 0){
        sum = sum + 1;
    }
    if(b5 != 0){
        sum = sum + 1;
    }
    if(b6 != 0){
        sum = sum + 1;
    }
    if(b7 != 0){
        sum = sum + 1;
    }
    if(b8 != 0){
        sum = sum + 1;
    }
    if(b9 != 0){
        sum = sum + 1;
    }

    if(sum == 9){
        return true;
    }
    else{
        return false;
    }

}
var winner=0;

function checkWinner(){ 
    if((b1+b2+b3)==3 || (b1+b4+b7)==3 || (b1+b5+b9)==3 || (b3+b5+b7)==3 || (b3+b6+b9)==3 || (b7+b8+b9)==3 || (b4+b5+b6)==3 || (b2+b5+b8)==3){
        winner = 1;
        if((b1+b2+b3)==3){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-2").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-2").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b1+b4+b7)==3){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-4").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-4").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b1+b5+b9)==3){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b3+b5+b7)==3){
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b3+b6+b9)==3){
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-6").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-6").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b7+b8+b9)==3 ){
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-8").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-8").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b4+b5+b6)==3){
            document.getElementById("bbtn-4").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-4").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-6").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-6").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b2+b5+b8)==3){
            document.getElementById("bbtn-2").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-2").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-8").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-8").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else{}
        return "X";
    }
    else if ((b1+b2+b3)==15 || (b1+b4+b7)==15 || (b1+b5+b9)==15 || (b3+b5+b7)==15 || (b3+b6+b9)==15 || (b7+b8+b9)==15 || (b4+b5+b6)==15 || (b2+b5+b8)==15) {
        winner = 2;
        if((b1+b2+b3)==15){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-2").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-2").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b1+b4+b7)==15){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-4").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-4").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b1+b5+b9)==15){
            document.getElementById("bbtn-1").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b3+b5+b7)==15){
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b3+b6+b9)==15){
            document.getElementById("bbtn-3").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-6").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-6").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b7+b8+b9)==15 ){
            document.getElementById("bbtn-7").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-8").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-8").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-9").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b4+b5+b6)==15){
            document.getElementById("bbtn-4").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-4").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-6").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-6").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else if((b2+b5+b8)==15){
            document.getElementById("bbtn-2").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-2").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-5").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
            document.getElementById("bbtn-8").style.animation = "boxanimation 1s ease-in-out";
            document.getElementById("bbtn-8").style.backgroundColor = "rgba(255, 75, 39, 0.495)";
        }
        else{}
        return "Y";
    } else {
        winner = 0;
        return "N";
    }
}

function liveCheck() {
    let y = checkWinner();
    if(winner != 0){
        if(winner == 1){
            document.getElementById("game-status").innerHTML = "Game Over";
            document.getElementById("winner-name").innerHTML = "X won";
        }
        else{
            document.getElementById("game-status").innerHTML = "Game Over";
            document.getElementById("winner-name").innerHTML = "O won";
        }
    }
    else if(checkGameOver() == true){
        document.getElementById("game-status").innerHTML = "Game Over";
        document.getElementById("winner-name").innerHTML = "Match Drawn";
    }
    else{}
}

function changeTurn() {
    if(xTurn == true){
        document.getElementById("show-turn-p").innerHTML = "Turn of : X";
    }
    else{
        document.getElementById("show-turn-p").innerHTML = "Turn of : O";
    }
}

function clickRestart(){
    xTurn = true;
    b1 = 0;
    b2 = 0;
    b3 = 0;
    b4 = 0;
    b5 = 0;
    b6 = 0;
    b7 = 0;
    b8 = 0;
    b9 = 0;
    document.getElementById("btn-1").innerHTML = "-";
    document.getElementById("btn-2").innerHTML = "-";
    document.getElementById("btn-3").innerHTML = "-";
    document.getElementById("btn-4").innerHTML = "-";
    document.getElementById("btn-5").innerHTML = "-";
    document.getElementById("btn-6").innerHTML = "-";
    document.getElementById("btn-7").innerHTML = "-";
    document.getElementById("btn-8").innerHTML = "-";
    document.getElementById("btn-9").innerHTML = "-";
    document.getElementById("bbtn-1").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-2").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-3").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-4").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-5").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-6").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-7").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-8").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-9").style.backgroundColor = "rgba(255, 255, 255, 0.499)";
    document.getElementById("bbtn-1").style.animation = "";
    document.getElementById("bbtn-2").style.animation = "";
    document.getElementById("bbtn-3").style.animation = "";
    document.getElementById("bbtn-4").style.animation = "";
    document.getElementById("bbtn-5").style.animation = "";
    document.getElementById("bbtn-6").style.animation = "";
    document.getElementById("bbtn-7").style.animation = "";
    document.getElementById("bbtn-8").style.animation = "";
    document.getElementById("bbtn-9").style.animation = "";

    document.getElementById("game-status").innerHTML = "";
    document.getElementById("winner-name").innerHTML = "";
    changeTurn();
}