//じゃんけんの手を配列に格納（CPの手決定用）
const hands = ["rock", "paper", "scissors"]

//必要なグローバル変数の定義
let playerScore = 0;
let computerScore = 0;
let playerChoice ="";
let comChoice ="";
let winner ="";

//コンピュータの入力を取得する
const getComChoice = () => hands[Math.floor(Math.random() * 3)];

// ユーザー入力とコンピューター入力を比較、勝敗を判定
function playRound(com, player){
    if(com === player){
        winner = "";
        printResult();
    } else if(com === "rock" && player === "scissors"){
        winner = "com";
        printResult();
    } else if(com === "rock" && player === "paper"){
        winner = "player";
        printResult();
    } else if(com === "paper" && player === "scissors"){
        winner = "player";
        printResult();
    } else if(com === "paper" && player === "rock"){
        winner = "com";
        printResult();
    } else if(com === "scissors" && player === "rock"){
        winner = "player";
        printResult();
    } else if(com === "scissors" && player === "paper"){
        winner = "com";
        printResult();
    }
}

const div = document.querySelector(".result");

// 結果の表示とスコアの加点
function printResult() {
    // 毎回クリア＆メッセージを上書き
    if (winner === "player") {
        playerScore += 1;
        div.innerHTML = `
            <p>ママは ${comChoice}！ きみの勝ちだね。<br>
            きみの得点：${playerScore}点 ママの得点：${computerScore}点</p>`;
    } else if (winner === "com") {
        computerScore += 1;
        div.innerHTML = `
            <p>ママは ${comChoice}！ ママの勝ちだね。<br>
            きみの得点：${playerScore}点 ママの得点：${computerScore}点</p>`;
    } else {
        div.innerHTML = `<p>あいこだよ、もう一回やってみよう！</p>`;
    }
}

function tryAgain(){
    if(playerScore >= 5){
        const p = document.createElement("p");
        const btn = document.createElement("button");

        p.innerHTML = "<p>5点先取！きみの勝ち！<br>もう一度遊ぶ？</p>"

        div.appendChild(p)
        div.appendChild(btn)
    }
}


const btns = document.querySelectorAll(".hands"); 

// 各ボタンにイベントトリガーを設置、押下でplayRoundを行う
btns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    comChoice = getComChoice();
    playerChoice = event.target.value;

    playRound(comChoice, playerChoice);
  });
});