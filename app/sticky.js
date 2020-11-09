window.addEventListener('scroll', () => {
    let pegaHeader = document.querySelector('.sectionP');
    let windowPosition = window.scrollY > 300;
    pegaHeader.classList.toggle('tActive', windowPosition);
});