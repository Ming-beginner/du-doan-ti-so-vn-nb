let budget = document.getElementById("budget");
let playerBudget = 1000;

let vietnamScore = Math.floor((Math.random() * 5) + 1);
let japanScore = Math.floor((Math.random() * 5) + 1);

let vietnamFactBlock = document.getElementById("fact-vietnam");
let japanFactBlock = document.getElementById("fact-japan");
let vietnamPredictionBlock = document.getElementById("prediction-vietnam");
let japanPredictionBlock = document.getElementById("prediction-japan");

let finalResult = document.getElementById("final-result");
let resultBlock = document.querySelector("#result-block > h2")

let startBtn = document.getElementById("start-btn");

let result = "";

budget.innerHTML = playerBudget + "$";
startBtn.addEventListener("click", start);


function start() {
    if (document.getElementById("money").value &
        document.getElementById("vietnam-score").value &
        document.getElementById("japan-score").value) {
        for (i = 0; i < 3; i++) {
            document.getElementsByTagName("input")[i].classList.remove('error-input');
        }
        document.getElementsByTagName("input")[0].placeholder = "Type Viet Nam's Score";
        document.getElementsByTagName("input")[1].placeholder = "Type Japan's Score";
        document.getElementsByTagName("input")[2].placeholder = "How much money?";
        del();
        renderResult();
        checkResult();
        document.getElementById("vietnam-score").value = "";
        document.getElementById("japan-score").value = "";
        document.getElementById("money").value = "";
        // let time = new Date();
        // console.log(`Time: ${time.getHours()}h ${time.getMinutes()}m ${time.getSeconds()}s Date:${time.getDay()}/${time.getMonth()+1}/${time.getUTCFullYear()}`);
    } else {
        for (i = 0; i < 3; i++) {
            document.getElementsByTagName("input")[i].placeholder = "error, type again";
            document.getElementsByTagName("input")[i].classList.add('error-input');
        }
    }
}

function del() {
    resultBlock.innerHTML = "";
    vietnamFactBlock.innerHTML = "";
    japanFactBlock.innerHTML = "";
    vietnamPredictionBlock.innerHTML = "";
    japanPredictionBlock.innerHTML = "";
}

function renderResult() {
    vietnamFactBlock.innerText = vietnamScore;
    japanFactBlock.innerText = japanScore;
    vietnamPredictionBlock.innerText = document.getElementById("vietnam-score").value;
    japanPredictionBlock.innerText = document.getElementById("japan-score").value;
}

function checkResult() {
    if (Number(document.getElementById("vietnam-score").value) === vietnamScore && document.getElementById("japan-score").value === japanScore) {
        result = "You won, double money $$$$$$";
        playerBudget += Number(document.getElementById("money").value) * 2;
    } else {;
        result = "Oh no, you lost";
        playerBudget -= Number(document.getElementById("money").value);

        budget.innerHTML = playerBudget + "$";
    }
    budget.innerHTML = playerBudget + "$";
    resultBlock.innerHTML += result;
}