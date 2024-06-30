const dead = document.getElementById('dead');
const lost = document.getElementById('lost');
const hole = document.getElementsByClassName('hole');
getHole = index => document.getElementById('hole${index}');
for (let i = 0; i < hole.length; i++) {
    hole[i].addEventListener('click', () => {
        if (hole[i].classList.contains('hole_has-mole')) {
            if (dead.textContent < 9) {
                dead.textContent++;
            } else {
                alert('Вы выиграли');
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            if (lost.textContent < 4) {
                lost.textContent++;
            } else {
                alert('Вы проиграли');
                dead.textContent = 0;
                lost.textContent = 0;
            }   
        } 
    }) 
}
