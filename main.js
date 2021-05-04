window.onload = function() {
        document.querySelector('.icon-menu-contanier').addEventListener('click', function() {
        document.querySelector('.icon-menu-contanier').classList.toggle('active')
        document.querySelector('.categories').classList.toggle('active')
        document.querySelector('.line').classList.toggle('active')
        document.querySelector('.language-contanier').classList.toggle('active')
    })
}