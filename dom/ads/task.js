const allRotators = document.querySelectorAll('.rotator');
allRotators.forEach(thisRotator => {
    const rotators = thisRotator.querySelectorAll('.rotator__case');
    let index = 0;
    function rotateCases() {
        rotators.forEach(rotatorCase => {
          rotatorCase.classList.remove('rotator__case_active');
        });
        rotators[index].classList.add('rotator__case_active');
        index++;
        if (index >= rotators.length) {
            index = 0;
        }
    }
    setInterval(rotateCases, 1000);
});
