const dropdownWrapper = document.querySelector('.dropdown-text');
const btnToggle = dropdownWrapper.querySelector('.btn-toggle');

btnToggle.addEventListener('click', () => {
    dropdownWrapper.classList.toggle('active');
});
