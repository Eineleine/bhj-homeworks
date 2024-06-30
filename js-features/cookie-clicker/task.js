const cookieClick = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');
cookieClick.onclick = function() {
    clickCounter.textContent++;
    if ((clickCounter.textContent %2) === 0) {
        cookieClick.width = 200;
    } else {
        cookieClick.width = 300;
    }
}