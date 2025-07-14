const menuBtn = document.querySelector('.menu-btn')
const menuMobile = document.querySelector('.header__list')

menuBtn.addEventListener('click', () => {
   menuMobile.classList.toggle('menu--active')
})

