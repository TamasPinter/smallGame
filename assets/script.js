// grab location variables
let winNumber = document.querySelector("#winsNumber");
let lossNumber = document.querySelector("#lossesNumber");
let tieNumber = document.querySelector("#tiesNumber");
let userR = document.querySelector("#flexRadioDefault1");
let userP = document.querySelector("#flexRadioDefault2");
let userS = document.querySelector("#flexRadioDefault3");
let gameButn = document.querySelector("#startButton");
let saveButn = document.querySelector("#saveScore");
let savedWins = document.querySelector("#winsSaved");
let savedLosses = document.querySelector("#lossesSaved");
let savedTies = document.querySelector("#tiesSaved");
let compR = "";
let compP = "";
let compS = "";
let winN = 0;
let lossN = 0;
let tieN = 0;

//call loadLocalScore function
loadLocalScore();

//add event listener for button
gameButn.addEventListener("click", function() {
    playGame();
    return;
    
});
//create playGame function

function playGame() {
    //generate random number between 1 and 3 for computer
    let compChoice = Math.floor(Math.random() * 3) +1;
    //if computer choice is 1, set compR to true
    if (compChoice === 1) {
        compR = true;
    }
    //if computer choice is 2, set compP to true
    else if (compChoice === 2) {
        compP = true;
    }
    //if computer choice is 3, set compS to true
    else if (compChoice === 3) {
        compS = true;
    }
    console.log(compChoice);
    //check user choices radio buttons
    //if userR is checked, set userR to true
    if (userR.checked === true) {
        userR = true;
    }
    //if userP is checked, set userP to true
    else if (userP.checked === true) {
        userP = true;
    }
    //if userS is checked, set userS to true
    else if (userS.checked === true) {
        userS = true;
    }
    console.log(userR);
    console.log(userP);
    console.log(userS);    
    //if userR is true and compR is true, add 1 to tieNumber
    if (userR === true && compR === true) {
        tieN++;
        tieNumber.textContent = tieN;
        alert("Computer choce Rock, you tied!")
    }
    //if userR is true and compP is true, add 1 to lossNumber
    else if (userR === true && compP === true) {
        lossN++;
        lossNumber.textContent = lossN;
        alert("Computer choce Paper, you lost!");
    }
    //if userR is true and compS is true, add 1 to winNumber
    else if (userR === true && compS === true) {
        winN++;
        winNumber.textContent = winN;
        alert("Computer choce Scissors, you won!");
    }
    //if userP is true and compR is true, add 1 to winNumber
    if (userP === true && compR === true) {
        winN++;
        winNumber.textContent = winN;
        alert("Computer choce Rock, you won!");
    }
    //if userP is true and compP is true, add 1 to tieNumber
    else if (userP === true && compP === true) {
        tieN++;
        tieNumber.textContent = tieN;
        alert("Computer choce Paper, you tied!");
    }
    //if userP is true and compS is true, add 1 to lossNumber
    else if (userP === true && compS === true) {
        lossN++;
        lossNumber.textContent = lossN;
        alert("Computer choce Scissors, you lost!");
    }
    //if userS is true and compR is true, add 1 to lossNumber
    if (userS === true && compR === true) {
        lossN++;
        lossNumber.textContent = lossN;
        alert("Computer choce Rock, you lost!");
    }
    //if userS is true and compP is true, add 1 to winNumber
    else if (userS === true && compP === true) {
        winN++;
        winNumber.textContent = winN;
        alert("Computer choce Paper, you won!")
    }
    //if userS is true and compS is true, add 1 to tieNumber
    else if (userS === true && compS === true) {
        tieN++;
        tieNumber.textContent = tieN;
        alert("Computer choce Scissors, you tied!");
    }
   

    //reset computer choice
    compR = "";
    compP = "";
    compS = "";
    //reset user choice
    userR = document.querySelector("#flexRadioDefault1");
    userP = document.querySelector("#flexRadioDefault2");
    userS = document.querySelector("#flexRadioDefault3");
}
 
//add event listener for save score button
saveButn.addEventListener("click", function() {
    saveLocalScore();
    return;
})

//create saveLocalScore function
function saveLocalScore() {
    //create object to store score
    let score = {
        wins: winN,
        losses: lossN,
        ties: tieN,
    }
    //save score to local storage
    localStorage.setItem("score", JSON.stringify(score));
}

//create loadLocalScore function
function loadLocalScore() {
    //get score from local storage
    let score = JSON.parse(localStorage.getItem("score"));
    //if score is not null, set savedWins, savedLosses, and savedTies to score.wins, score.losses, and score.ties
    if (score !== null) {
        savedWins.textContent = score.wins;
        savedLosses.textContent = score.losses;
        savedTies.textContent = score.ties;
    }
    else {
        return;
    }
}










