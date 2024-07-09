const dropDown = document.querySelectorAll('.dropdown__value');
const dropList = document.querySelectorAll('.dropdown__list');

for (let j = 0; j < dropDown.length; j++) {
    dropDown[j].addEventListener('click', () => {
        const prevDropList = document.querySelector('.dropdown__list_active');
        if (prevDropList) {
            prevDropList.classList.remove('dropdown__list_active');
        }
        dropList[j].classList.add('dropdown__list_active');
        const nowDropLink = dropList[j].querySelectorAll('.dropdown__link');
        for (let i = 0; i < nowDropLink.length; i++) {
            nowDropLink[i].addEventListener('click', (event) => {
                dropDown[j].textContent = nowDropLink[i].textContent;
                event.preventDefault();
                dropList[j].classList.remove('dropdown__list_active');
            })
        }
    }) 
}


