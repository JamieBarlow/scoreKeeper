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
let isGameOver = false;
let winningScore = 3;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        if (player.score === winningScore) {
            isGameOver = true;
            opponent.display.classList.add("loser");
            player.display.classList.add("winner");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
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
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("loser", "winner");
        p.button.disabled = false;
    }
}