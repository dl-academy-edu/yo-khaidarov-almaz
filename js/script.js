const popup = document.querySelector('.popup__form');
const buttonOpen = document.querySelector('.button-js');
const buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('open');
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open');
})