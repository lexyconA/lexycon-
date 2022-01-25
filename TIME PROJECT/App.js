const mobileBtn = document.getElementById ('mobile-cta')
        nav = document.querySelector('nav')
        mobileBtnExit = document.getElementById ('mobile-exit')

    mobileBtn.addEventListener('click',() => {
        nav.classList.add('menu-btn')
    })
    mobileBtnExit.addEventListener('click',() => {
        nav.classList.remove('menu-btn')
    })











const date = getElementById('#date')
const currentYear = new Date ().getFullYear()

date.textContent = currentYear

