const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display'),
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display'),
}

const resetButton = document.querySelector('#reset');
let playingTo = document.querySelector('#playingTo');
let tieBreak = false;
let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent) {
    let difference = scoreDifference(player, opponent);
    if (!isGameOver) {
        player.score++;
        if (((player.score === winningScore) && difference >= 2)) {
            gameOver(player, opponent);
        } else if (tieBreak === false && (player.score === winningScore) && difference < 2) {
            tieBreak = true;
            let tieBreakHeader = document.createElement('h1');
            tieBreakHeader.textContent = "Tie Break!";
            document.querySelector(".sub-container.three").prepend(tieBreakHeader);
        } else if ((tieBreak === true) && player.score >= winningScore && player.score - opponent.score >= 2) {
            gameOver(player, opponent);
        }
        player.display.textContent = player.score;
    }
} 

function gameOver(player, opponent) {
    isGameOver = true;
    opponent.display.classList.add("loser");
    player.display.classList.add("winner");
    player.button.disabled = true;
    opponent.button.disabled = true;
}

playingTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

p1.button.addEventListener('click', function() {
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function() {
    updateScores(p2, p1);
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    tieBreak = false;
    // Removes tie-break if it exists
    let firstElem = document.querySelector('.sub-container.three').children[0];
    if (firstElem.nodeName === "H1") {
        firstElem.remove();
    }
    // Resets scores and styling
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("loser", "winner");
        p.button.disabled = false;
    }
}

function scoreDifference(num1, num2) {
    return Math.abs(num1.score - num2.score);    
}