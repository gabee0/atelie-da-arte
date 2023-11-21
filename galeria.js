const panel = document.querySelectorAll('.panel')

Panels.forEach(panel => {
    panel.addEventListener('click', () => { removeActiveClasses() panel.classList.add('active') })
})