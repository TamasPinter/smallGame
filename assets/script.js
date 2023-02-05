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

//game 2
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2; //starting x position
let y = canvas.height - 30; //starting y position
let dx = 2; //change in x position
let dy = -2; //change in y position
const ballRadius = 10; //radius of ball
const paddleHeight = 10; //height of paddle
const paddleWidth = 75; //width of paddle
let paddleX = (canvas.width - paddleWidth) / 2; //starting x position of paddle
let rightPressed = false; //booleam for right key
let leftPressed = false; //boolean for left key
const brickRowCount = 3; //number of rows of bricks
const brickColumnCount = 5; //number of columns of bricks
const brickWidth = 75; //width of brick
const brickHeight = 20; //height of brick
const brickPadding = 10; //padding between bricks
const brickOffsetTop = 30; //distance from top of canvas to bricks
const brickOffsetLeft = 30; //distance from left of canvas to bricks
let game2Score = 0; //score for game 2
let lives = 3; //number of lives

//brick array
const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1}; //creates x and y coordinates for each brick and adds status property
    }
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2); //draws circle
    ctx.fillStyle = "#0095DD"; //defines color
    ctx.fill();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight); //draws rectangle
    ctx.fillStyle = "0095DD"; //defines color
    ctx.fill();
    ctx.closePath();
}

function drawBricks() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) { //if status is 1, draw bricks
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft; //X coordinates from width + padding multiplied by column number + offset
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop; //Y coordinates from height + padding multiplied by row number + offset
            bricks[c][r].x = brickX; //sets x coordinate of brick
            bricks[c][r].y = brickY; //sets y coordinate of brick
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = "#0095DD";
            ctx.fill();
            ctx.closePath();
            }
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears rectangle each interval
    drawBricks();
    drawBall();
    drawPaddle();
    drawScore();
    drawLives();
    collisionDetection();
    
    if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx; //if x position is greater than canvas width or less than 0, change direction. left and right wall collision
    }
    if (y + dy < ballRadius) {
        dy = -dy; //if y position is less than 0, change direction. top wall collision
    } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
            dy = -dy; //if ball comes down but between coordinates of paddle ends, it bounces back up
        } else {
            lives--; //subtracts a life
            if(!lives) { // if no lives left, game over
        alert("GAME OVER"); 
        document.location.reload(); //reload page
        }
        else {
            x = canvas.width / 2; //resets ball position
            y = canvas.height - 30;
            dx = 3;
            dy = -3;
            paddleX = (canvas.width-paddleWidth) / 2; //resets paddle position
        }
    }
    if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth); //if right key pressed, move paddle right
    } else if (leftPressed) { 
        paddleX = Math.max(paddleX - 7, 0); //if left key pressed, move left
    }
}
    x += dx; //adds change in x position
    y += dy; //adds change in y position
    requestAnimationFrame(draw); //calls draw function
}

document.addEventListener("keydown", keyDownHandler, false); //add event listener for keydown
document.addEventListener("keyup", keyUpHandler, false); //add event listener for keyup
document.addEventListener("mousemove", mouseMoveHandler, false); //add event listener for mouse movement

function mouseMoveHandler(e) {
    const relativeX = e.clientX - canvas.offsetLeft; //sets relative x position of mouse e.clientx is x position of mouse
    if (relativeX > 0 && relativeX < canvas.width) {
        paddleX = relativeX - paddleWidth / 2; //sets paddle position to mouse position
    }

}

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true; //if right key is pressed, set rightPressed to true
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true; //if Left key is pressed, set leftPressed to true
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false; //if right key is released, set rightPressed to false
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false; //if left key is released, set leftPressed to false
    }
}



function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
            //if center of ball is inside a brick, change direction
            //if x position of ball is greater than x position of brick
            //if x position of the ball is less than the x position of brick + width
            //if y position of ball is greater than y of the brick
            //if y position of ball is less than y of brick plus its height
            if (x > b.x && x < b.x + brickWidth && y > b.y && y <b.y + brickHeight) {
                dy = -dy; //change direction
                b.status = 0; //set status to 0
                game2Score++; //add 1 to score
                if (game2Score === brickRowCount * brickColumnCount) {
                    alert("YOU WIN, CONGRATULATIONS!"); //if score is equal to number of bricks, alert win
                    document.location.reload(); //reload page
                    
                }
                }
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Score: ${game2Score}`, 8, 20); //draws text to display score & coordinates
}

function drawLives() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText(`Lives: ${lives}`, canvas.width - 65, 20); //draws text to display lives & coordinates
}
draw();


