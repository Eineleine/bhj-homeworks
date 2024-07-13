const reveal = document.querySelectorAll('.reveal');
function IsVisible() {
    reveal.forEach(revealBlock => {
        const revealPositionTop = revealBlock.getBoundingClientRect().top;
        const revealPositionBottom = revealBlock.getBoundingClientRect().bottom;
        const windowHeigth = window.innerHeight;
        if (revealPositionTop < windowHeigth) {
            revealBlock.classList.toggle('reveal_active',true);
        } else {
            revealBlock.classList.toggle('reveal_active',false);
        }
        if (revealPositionBottom < 0) {
            revealBlock.classList.toggle('reveal_active',false);
        }
    })
}
IsVisible();
window.addEventListener('scroll', IsVisible);
