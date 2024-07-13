const fontSize = document.querySelectorAll('.font-size');
const content = document.querySelector('.book');
for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', (event) => {
        event.preventDefault();
        const prevFontSize = document.querySelector('.font-size_active');
        if (prevFontSize) {
            prevFontSize.classList.toggle('font-size_active');
        }
        fontSize[i].classList.toggle('font-size_active');
        if (fontSize[i].dataset.size === 'small') {
            content.classList.toggle('book_fs-small');
        }
        if (fontSize[i].dataset.size === 'big') {
            content.classList.toggle('book_fs-big');
        }
        if (!fontSize[i].dataset.size) {
            content.classList.toggle('book_fs-big', false);
            content.classList.toggle('book_fs-small', false);
        }
    })
}