const modal = document.querySelector('.modal');
const findOutMoreButtons = document.querySelectorAll('.find-out-more');
const closeModalButton = document.querySelector('.close-modal-btn');
const modalHeader = document.querySelector('.modal-header');
const modalInfo = document.querySelector('.modal-info');
findOutMoreButtons.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    modal.showModal();
    const content = event.target.closest('.content');
    const title = content.querySelector('.title').textContent;
    const desc = content.querySelector('.desc').textContent;
    modalHeader.textContent = title;
    modalInfo.textContent = desc;
  });
});
closeModalButton.addEventListener('click', () => {
  modal.close();
});
