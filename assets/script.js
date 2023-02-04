// grab location variables
let winNumber = document.querySelector("#winsNumber");
let lossNumber = document.querySelector("#lossesNumber");
let tieNumber = document.querySelector("#tiesNumber");
let userR = document.querySelector("#flexRadioDefault1");
let userP = document.querySelector("#flexRadioDefault2");
let userS = document.querySelector("#flexRadioDefault3");
let gameButn = document.querySelector("#startButton");
let compR = "";
let compP = "";
let compS = "";
let winN = 0;
let lossN = 0;
let tieN = 0;

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
    }
    //if userR is true and compP is true, add 1 to lossNumber
    else if (userR === true && compP === true) {
        lossN++;
        lossNumber.textContent = lossN;
    }
    //if userR is true and compS is true, add 1 to winNumber
    else if (userR === true && compS === true) {
        winN++;
        winNumber.textContent = winN;
    }
    //if userP is true and compR is true, add 1 to winNumber
    if (userP === true && compR === true) {
        winN++;
        winNumber.textContent = winN;
    }
    //if userP is true and compP is true, add 1 to tieNumber
    else if (userP === true && compP === true) {
        tieN++;
        tieNumber.textContent = tieN;
    }
    //if userP is true and compS is true, add 1 to lossNumber
    else if (userP === true && compS === true) {
        lossN++;
        lossNumber.textContent = lossN;
    }
    //if userS is true and compR is true, add 1 to lossNumber
    if (userS === true && compR === true) {
        lossN++;
        lossNumber.textContent = lossN;
    }
    //if userS is true and compP is true, add 1 to winNumber
    else if (userS === true && compP === true) {
        winN++;
        winNumber.textContent = winN;
    }
    //if userS is true and compS is true, add 1 to tieNumber
    else if (userS === true && compS === true) {
        tieN++;
        tieNumber.textContent = tieN;
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
 




