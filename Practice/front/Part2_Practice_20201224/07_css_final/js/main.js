const backToTop = document.getElementById('backtotop');


const checkScroll = () => {
    /*
        https://developer.mozilla.org/ko/docs/Web/API/Window/pageYOffset 스크롤이 얼마나 되었는지 픽셀단위로 변환
        pageYOffset
    */
    let pageYOffset = window.pageYOffset;
    if (pageYOffset !== 0) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
};

const moveBackToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({top: 0, behavior: "smooth"})
    }
};

window.addEventListener('scroll', checkScroll);
backToTop.addEventListener('click', moveBackToTop);
