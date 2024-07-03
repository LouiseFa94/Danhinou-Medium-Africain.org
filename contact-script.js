/*Les scripts pour faire afficher la barre verticale lorsque l'icône menu  est clické*/
const navbarRight =document.querySelector('.navbar-right-section');
const menuButton=document.querySelector('.navbar-right-section div .menu-icon');
const menuVertical =document.querySelector('.menu-vertical-links');

navbarRight.onclick = function(){
    menuVertical.classList.toggle('open');
    const isOpen =menuVertical.classList.contains('open');
    menuButton.classList = isOpen ? 'change':'menu-icon';
}