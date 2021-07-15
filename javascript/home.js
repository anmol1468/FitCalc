
document.addEventListener('click', (event) => {
    if (event.target.closest('.scroll')) {
        window.scrollTo({
            top: 620,
            left: 0,
            behavior: 'smooth'
        })
    }
})