const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab__content');
for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', () => {
        const prevActiveTab = document.querySelector('.tab_active');
        const prevActiveContent = document.querySelector('.tab__content_active');
        if (prevActiveTab) {
            prevActiveTab.classList.remove('tab_active');
            
        }
        if (prevActiveContent) {
            prevActiveContent.classList.remove('tab__content_active');
        }
        tabs[i].classList.add('tab_active');
        contents[i].classList.add('tab__content_active');
    })
}