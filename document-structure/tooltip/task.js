const links = [...document.querySelectorAll('.has-tooltip')];

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        //console.log(link);
        const pos = link.getBoundingClientRect();
        //console.log(link.textContent);
        console.log(pos);
        const toolTip = document.querySelector('.tooltip');
        if (toolTip) {
            toolTip.classList.toggle('tooltip_active');
        } else {
            
            link.insertAdjacentHTML('afterEnd',   
                `<div class="tooltip tooltip_active" style="left: ${pos.left}, top: (${pos.y} + ${pos.height})">
                    ${link.title}
                </div>`)
           /* const newToolTip = document.createElement('div');
            newToolTip.className = 'tooltip';
            newToolTip.classList.add('tooltip_active');
            newToolTip.style = 'left: 0; top: 0';
            newToolTip.innerText = link.title;
            div.append(newToolTip);*/
        }
    });
});
