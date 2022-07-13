const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
let p1Display = document.querySelector('#p1Display');
let p2Display = document.querySelector('#p2Display');
// let playingTo = document.querySelector('#playingTo');
let isGameOver = false;
let p1Score = 0;
let p2Score = 0;

let playingTo = 3;

p1Button.addEventListener('click', function() {
    if (!isGameOver) {
        p1Score++;
        if (p1Score === playingTo) {
            isGameOver = true;
        }
        p1Display.innerHTML = p1Score;
    }
});

p2Button.addEventListener('click', function() {
    if (!isGameOver) {
        p2Score++;
        if (p2Score === playingTo) {
            isGameOver = true;
        }
        p1Display.innerHTML = p2Score;
    }
});

resetButton.addEventListener('click', function() {
    p1Score = 0;
    p1Display.innerHTML = p1Score;
    p2Score = 0;
    p2Display.innerHTML = p2Score;
    isGameOver = false;
})

// playingTo.children[0].value