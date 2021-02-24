'use strict'

//initiate variables using DOM 
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');


//add event handlers
const openModal = () => {
    console.log('Button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}
const closeModal = () => {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
for (let i = 0; i < btnOpenModal.length; i++)
    btnOpenModal[i].addEventListener('click', openModal);

//group into one function and apply to both classes
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//allow Esc to close modal
document.addEventListener('keydown', (e) => {
    console.log('e.key');
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }

});


