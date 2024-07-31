const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const answer = xhr.response;
        document.querySelector('.poll__title').innerHTML = answer.data.title;
        const btnAnswer = document.querySelector('.poll__answers');

        for (let i = 0; i < answer.data.answers.length; i++) {
            const btn = document.createElement('button');
            btn.className = 'poll__answer';
            btn.innerText = answer.data.answers[i];
            btnAnswer.appendChild(btn);
        }

        const btnGroup = [...document.querySelectorAll('.poll__answer')];
        for (let j = 0; j < btnGroup.length; j++) {
            btnGroup[j].addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
            })
        }
    }
})



