var tie = 0;
var move = 0;
var  lastMove;
var oneOne = false;
function startGame(){
    for(var i =1 +1; i < 10 ; i++){
        clearBox(i)
    }
    clearMoves();
    tie=0;
    move = 0;
    document.turn = "X";
    if(Math.random() < 0.5){
        document.turn = "O";
    }
    document.winner = null;
    setMessage(document.turn + " gets to start");
}

function setMessage(msg){
        document.getElementById("objectxo").innerText = msg;

}

function setMoves(num){
        if(num == 1)
            document.getElementById("one").innerText = "player " + document.turn + " selected " + lastMove + " tie: " + tie+ "one"+ oneOne;
        else if (num == 2)
            document.getElementById("two").innerText = "player " + document.turn + " selected " + lastMove+ " tie: " + tie+"one"+ oneOne;
        else if (num == 3)
            document.getElementById("tree").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 4)
            document.getElementById("four").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 5)
            document.getElementById("five").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 6)
            document.getElementById("six").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 7)
            document.getElementById("seven").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 8)
            document.getElementById("eight").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;
        else if (num == 9 && document.winner != null)
            document.getElementById("nine").innerText = "player " + document.turn + " selected " + lastMove+ "tie:" + tie+"one"+ oneOne;


}

function clearMoves()
{
        document.getElementById("one").innerText = "";
        document.getElementById("two").innerText = "";
        document.getElementById("tree").innerText = "";
        document.getElementById("four").innerText = "";
        document.getElementById("five").innerText = "";
        document.getElementById("six").innerText = "";
        document.getElementById("seven").innerText = "";
        document.getElementById("eight").innerText = "";
        document.getElementById("nine").innerText = "";
}

function nextMove(tile){
    move++;
    if(tile.innerText === "" && document.winner === null){
        tie++;
    }
    lastMove = tile.id;

    if (document.winner === null && tie > 8){
        setMessage("its a tie");
        tile.innerText = document.turn;
    }
    else if(document.winner != null){
        setMessage(document.winner + " already won the game, please start over");
    }
    else if(tile.innerText === ""){
        tile.innerText = document.turn;
        switchTurn();
    }else{
        setMessage("That tile is already used!");
    }
    if (document.winner === null && move < 10){
        setMoves(tie);
    }

}


function switchTurn(){
    if(tie === 9){
        setMessage("tie");
    }
    else if(checkForWinner(document.turn)){
        setMessage(document.turn + " Won!!!");
        document.winner = document.turn;
    }
    else if(document.turn === "X" && tie != 9){
        document.turn = "O";
        setMessage("its " + document.turn + " turn");
    }else{
        document.turn = "X";
        setMessage("its " + document.turn + " turn");
    }

}

function checkForWinner(move){
    var result = false;
    if(checkRow(1,2,3,move) || checkRow(4,5,6,move) || checkRow(7,8,9,move)
        ||  checkRow(1,4,7,move) || checkRow(2,5,8,move) || checkRow(3,6,9,move)
        ||  checkRow(1,5,9,move) || checkRow(3,5,7,move)){
        result = true;
    }
    return result;
}

function checkRow(a, b, c, move){
    var result = false;
    if(getBox(a) == move && getBox(b) == move && getBox(c) == move)
        result = true;
    return result;

}
