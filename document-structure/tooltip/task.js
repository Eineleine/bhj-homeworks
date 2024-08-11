const links = [...document.querySelectorAll('.has-tooltip')];

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const toolTip = link.querySelector('.tooltip');
        if (toolTip) {
            toolTip.classList.toggle('tooltip_active');
        } else {
            const newToolTip = document.createElement('div');
            newToolTip.className = 'tooltip';
            newToolTip.classList.add('tooltip_active');
            newToolTip.style = 'left: 0; top: 0';
            newToolTip.innerText = link.title;
            link.append(newToolTip);
        }
    });
});

