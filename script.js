const button = document.querySelector('.btn');
const screens = document.querySelectorAll('.screen');

let screenIndex = 0;

button.addEventListener('click', () => {
    if (screenIndex  < 2) {
        screens[screenIndex].classList.add('up');
        screenIndex++;
    } else {
        screenIndex = 0;
        screens.forEach(screen => screen.classList.remove('up'))
    }
})