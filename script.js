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

//プレイヤが勝った時、プレイヤのスコアを加点し、勝敗と現スコアをコンソールに表示
function playerWins(){
    playerScore += 1;
    console.log("Player wins. Your Score: "+ playerScore +"CP Score: "+ computerScore);
}

//CPが勝った時、CPのスコアを加点し、勝敗と現スコアをコンソールに表示
function comWins(){
    computerScore += 1;
    console.log("Computer wins. Your Score: "+ playerScore +"CP Score: "+ computerScore);
}

// ユーザー入力とコンピューター入力を比較、勝敗を判定
function playRound(com, player){
    if(com === player){
        console.log("Draw");
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

//指定回数じゃんけんを繰り返す。毎回プレイヤーとCPの選択を更新する。
//後々、回数はユーザー入力を受け付けるよう、引数として準備
function playGame(times){
    for(let i = 0; i < times; i++){
        playerChoice = getPlayerChoice();
        computerChoice = getComputerChoice();
        playRound(computerChoice, playerChoice);
    }

}

playGame(5);