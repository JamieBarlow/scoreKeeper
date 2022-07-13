const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

p1Button.addEventListener('click', function() {
    p1Score.innerHTML++;
});

p2Button.addEventListener('click', function() {
    p2Score.innerHTML++;
});