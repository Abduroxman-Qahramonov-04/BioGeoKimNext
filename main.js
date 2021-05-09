window.addEventListener('load', function() {
        document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.header-burger').classList.toggle('active')
        document.querySelector('.menu-box').classList.toggle('active')
        document.querySelector('#LanguageUZ').innerHTML = 'O`zbekcha'
        document.querySelector('#LanguageRU').innerHTML = 'Русский'
        document.querySelector('#LanguageEN').innerHTML = 'English'
        
    })
})