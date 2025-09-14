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
        tryAgain(5);
    } else if (winner === "com") {
        computerScore += 1;
        div.innerHTML = `
            <p>ママは ${comChoice}！ ママの勝ちだね。<br>
            きみの得点：${playerScore}点 ママの得点：${computerScore}点</p>`;
        tryAgain(5)
    } else {
        div.innerHTML = `<p>あいこだよ、もう一回やってみよう！</p>`;
    }
}

//5点先取した時点でゲーム終了、リプレイするか確認
function tryAgain(times){
    if(playerScore >= times || computerScore >= times){

        //結果表示
        const p = document.createElement("p");
        p.innerHTML = 
                        `<p>5点先取！${winner}の勝ち！<br>もう一度遊ぶ？</p>
                        <button class="replaybtn">はい</button>`
        div.appendChild(p)

        //リプレイボタンを押すとスコアリセットして初期画面へ
        const replayBtn = document.querySelector(".replaybtn")
        replayBtn.addEventListener("click", () =>{
            playerScore = 0;
            computerScore = 0;
            div.innerHTML = "";
        });
    }
}

// 各手ボタンにイベントトリガーを設置、押下でplayRoundを行う
const btns = document.querySelectorAll(".hands"); 
btns.forEach(btn => {
  btn.addEventListener("click", (event) => {
    comChoice = getComChoice();
    playerChoice = event.target.value;

    playRound(comChoice, playerChoice);
  });
});