const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
let playingTo = document.querySelector('#playingTo');
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;

playingTo.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === winningScore) {
            isGameOver = true;
            p2Display.className = "loser";
            p1Display.className = "winner";
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === winningScore) {
            isGameOver = true;
            p1Display.className = "loser";
            p2Display.className = "winner";
        }
        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', reset);

function reset() {
    p1Score = 0;
    p1Display.textContent = p1Score;
    p2Score = 0;
    p2Display.textContent = p2Score;
    isGameOver = false;
    p1Display.className = "";
    p2Display.className = "";
}

// playingTo.children[0].value