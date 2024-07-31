const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = 'json';
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const course = xhr.response;
        const items = document.querySelector('#items');
        const loader = document.querySelector('.loader');
        const valute = Object.values(course.response.Valute);
        loader.classList.toggle('loader_active');
        for (let i = 0; i < valute.length; i++) {
            const newItem = document.createElement('div');
            newItem.className = 'item';
            items.appendChild(newItem);
            const newCharCode = document.createElement('div');
            newCharCode.className = 'item__code';
            newCharCode.innerText = valute[i].CharCode;
            newItem.append(newCharCode);
            const newValue = document.createElement('div');
            newValue.className = 'item__value';
            newValue.innerText = valute[i].Value;
            newItem.append(newValue);
            const newName = document.createElement('div');
            newName.className = 'item__currency';
            newName.innerText = valute[i].Name;
            newItem.append(newName);

        }
    }
})