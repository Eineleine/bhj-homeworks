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
            content.classList.add('book_fs-small');
            content.classList.remove('book_fs-big');
        }
        if (fontSize[i].dataset.size === 'big') {
            content.classList.add('book_fs-big');
            content.classList.remove('book_fs-small');
        }
        if (!fontSize[i].dataset.size) {
            content.classList.remove('book_fs-big');
            content.classList.remove('book_fs-small');
        }
    })
}