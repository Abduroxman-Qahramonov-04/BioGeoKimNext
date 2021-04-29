function OpenMenu(){
    var iconMenuOpen = document.getElementById('IconMenuOpen')
    iconMenuOpen.style.display = 'none'

    var iconMenuClose = document.getElementById('IconMenuClose')
    iconMenuClose.style.display = 'block'
    iconMenuClose.addEventListener('click',CloseMenu)

    var SubjectsMobileVersion = document.getElementById('SubjectsMobileVersion')
    SubjectsMobileVersion.style.display = 'block'
    
}

function CloseMenu(){
    var iconMenuOpen = document.getElementById('IconMenuOpen')
    iconMenuOpen.style.display = 'block'

    var iconMenuClose = document.getElementById('IconMenuClose')
    iconMenuClose.style.display = 'none'
    

    var SubjectsMobileVersion = document.getElementById('SubjectsMobileVersion')
    SubjectsMobileVersion.style.display = 'none'
}

window.addEventListener('load',function(){
    var iconMenuOpen = document.getElementById('IconMenuOpen')
    iconMenuOpen.addEventListener('click',OpenMenu)
})