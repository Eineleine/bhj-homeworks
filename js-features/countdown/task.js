const count = document.getElementById('timer');
const timer = function () {
    count.textContent -= 1;      
}
const intervalId = setInterval(() => {
    if (count.textContent > 0) {
        timer();
    } else {
        alert('Вы победили в конкурсе');
        clearInterval(intervalId);
    }   
}, 1000);
