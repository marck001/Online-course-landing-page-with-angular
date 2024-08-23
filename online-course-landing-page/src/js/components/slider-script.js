

document.querySelectorAll('.slider-container').forEach(container => {
    const slider = container.querySelector('.slider');
    const leftBtn = container.querySelector('.left-btn');
    const rightBtn = container.querySelector('.right-btn');
    const slides = slider.getElementsByClassName('course').length;
    let currentPosition = 0;
    let currentMargin = 0;
    let slidesPerPage = 0;
    let slidesCount = slides - slidesPerPage;
    let containerWidth = container.offsetWidth;

    function checkWidth() {
        containerWidth = container.offsetWidth;
        setParams(containerWidth);
    }

    function setParams(w) {
        if (w < 451) {
            slidesPerPage = 1;
        } else if (w < 901) {
            slidesPerPage = 2;
        } else if (w < 1520) {
            slidesPerPage = 3;
        } else {
            slidesPerPage = 4;
        }
        slidesCount = slides - slidesPerPage;
        if (currentPosition > slidesCount) {
            currentPosition = slidesCount;
        }
        currentMargin = -currentPosition * (100 / slidesPerPage);
        slider.style.marginLeft = currentMargin + '%';
        updateButtons();
    }

    function updateButtons() {
        if (currentPosition <= 0) {
            leftBtn.classList.add('inactive');
        } else {
            leftBtn.classList.remove('inactive');
        }
        if (currentPosition >= slidesCount) {
            rightBtn.classList.add('inactive');
        } else {
            rightBtn.classList.remove('inactive');
        }
    }

    function slideLeft() {
        if (currentPosition > 0) {
            currentPosition--;
            currentMargin += (100 / slidesPerPage);
            slider.style.marginLeft = currentMargin + '%';
            updateButtons();
        }
    }

    function slideRight() {
        if (currentPosition < slidesCount) {
            currentPosition++;
            currentMargin -= (100 / slidesPerPage);
            slider.style.marginLeft = currentMargin + '%';
            updateButtons();
        }
    }

    leftBtn.addEventListener("click", slideLeft);
    rightBtn.addEventListener("click", slideRight);
    window.addEventListener("resize", checkWidth);
    checkWidth();

});