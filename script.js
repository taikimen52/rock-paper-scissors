/* Pseudocode
コンピュータの入力を取得する
プレイヤーの入力を取得する（prompt関数を使用する）
コンピュータとプレイヤーの入力を比較し、勝ち、負け、あいこの判定を行う
買った方に得点を1追加する
結果を表示する
*/

const hands = ["rock", "paper", "scissors"]

let playerScore = 0;
let computerScore = 0;

//コンピュータの入力を取得する
const getComputerChoice = () => hands[Math.floor(Math.random() * 3)];

// ユーザー入力の値を取得
const getPlayerChoice =() => prompt("じゃんけんぽん").toLowerCase();

// ユーザー入力とコンピューター入力を比較
function playRound(com, player){
    if(com === player){
        console.log("aiko");
    } else if(com === "rock" && player === "scissors"){
        comWins();
    } else if(com === "rock" && player === "paper"){
        playerWins();
    } else if(com === "paper" && player === "scissors"){
        playerWins();
    } else if(com === "paper" && player === "rock"){
        comWins();
    } else if(com === "scissors" && player === "rock"){
        playerWins();
    } else if(com === "scisors" && player === "paper"){
        comWins();
    } else {
       console.log("入力が正しくありません");
    }
}

function playerWins(){
    playerScore += 1;
    console.log("Player wins. Your Score: "+ playerScore +"CP Score: "+ computerScore);
}

function comWins(){
    computerScore += 1;
    console.log("Computer wins. Your Score: "+ playerScore +"CP Score: "+ computerScore);
}

function playGame(times){
    for(let i = 0; i < times; i++){
        playerChoice = getPlayerChoice();
        console.log(playerChoice);
        computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);
    }

}

playGame(5);