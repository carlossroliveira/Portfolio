window.addEventListener('scroll', () => {
    let pegaHeader = document.querySelector('.sectionP');
    let windowPosition = window.scrollY > 100;
    pegaHeader.classList.toggle('tActive', windowPosition);
});