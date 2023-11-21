const panel = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => { removeActiveClasses() panel.classList.add('active') })
})