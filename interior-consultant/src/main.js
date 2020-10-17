const hamburguer = document.querySelector('[data-bar]')
const hambuguerDiv = document.querySelector('.links')
const divs = document.querySelectorAll('[data-bar] div')

hamburguer.addEventListener('click', () => {
  divs.forEach(div => {
    div.classList.toggle('active')
    hambuguerDiv.classList.toggle('active')
  })
})