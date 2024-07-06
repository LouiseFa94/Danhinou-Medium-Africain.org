
var headerBtn=document.querySelector('.header-section button ');

headerBtn.addEventListener('mouseover',()=>{
    headerBtn.innerHTML="Continuer ?";
})
headerBtn.addEventListener('mouseout',()=>{
    headerBtn.innerHTML="En savoir plus";
});

const carousel=document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".wrapper button");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false,startX,startScrollLeft,timeoutId;

//obtiens le numéro des cartes qui peuvent rester dans le carousel
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insérer les copies des dernières petites cartes débutantes du carousel pour les scroller infiniment 
carouselChildren.slice(-cardPerView).reverse().forEach(card =>{
     carousel.insertAdjacentHTML("afterbegin" , card.outerHTML);
});

// Insérer les copies des premières petites cartes finales du carousel pour les scroller infiniment 
carouselChildren.slice(0 ,cardPerView).forEach(card =>{
    carousel.insertAdjacentHTML("beforeend" , card.outerHTML);
});


arrowBtns.forEach(btn => {
    btn.addEventListener("click",() =>{
        carousel.scrollLeft += btn.id === "btn1" ? -firstCardWidth : firstCardWidth ; 
    })
})
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    //Enregistre la position initiale du curseur et défile la positio du carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return;
    //Cecci mets à jour la position de défilement du carousel en fonction du mouvement du curseur
    carousel.scrollLeft = startScrollLeft - (e.pageX -   startX);
} 

const dragStop = () => {
    isDragging =false;
    carousel.classList.remove("dragging");
}

const autoPlay = () => {
    if(window.innerWidth < 800) return ; //retourne si la fenêtre est inférieure à 800 px
}

const InfiniteScroll = () => {
    // si le carousel est au début, scroll jusqu'à la fin
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2*carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    } 
    //si le carousel est à la fin, scroll jusqu'au début
    else if (carousel.scrollLeft === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth ;
        carousel.classList.remove("no-transition");
    }
}
carousel.addEventListener("mousedown",dragStart);
carousel.addEventListener("mousemove",dragging);
document.addEventListener("mouseup",dragStop);
carousel.addEventListener("scroll",InfiniteScroll);


/*Les scripts pour faire afficher la barre verticale lorsque l'icône menu  est clické*/
const navbarRight =document.querySelector('.navbar-right-section');
const menuButton=document.querySelector('.navbar-right-section div .menu-icon');
const menuVertical =document.querySelector('.menu-vertical-links');

navbarRight.onclick=function() {
    menuVertical.classList.toggle('open');
    const isOpen =menuVertical.classList.contains('open');
    menuButton.classList = isOpen ? 'change':'menu-icon';
}

//Texte animé comme en saisie
function typeWriterEffect(elements) {
    elements.forEach((element) => {
        const text = element.textContent;
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < text.length) {
                element.textContent = text.substring(0, charIndex + 1);
                charIndex++;
                setTimeout(typeWriter, 120); // Délai entre chaque caractère (en millisecondes)
            }
        }

        // Lancer l'animation au chargement de la page
        window.addEventListener('load', typeWriter);
    });
}

// Appel de la fonction pour tous les éléments avec la classe "typewriter"
const typewriterElement = document.querySelectorAll('.typewriter');
const typewriterPara =document.querySelectorAll('.init-description');
const typewriterTextService =document.querySelectorAll('.services p');
typeWriterEffect(typewriterTextService);
typeWriterEffect(typewriterPara);
typeWriterEffect(typewriterElement);

//Effet de défilement des mots d'un texte
        const words = ["Médium", "Magicien", "Guérisseur", "Purificateur","Africain"];
        let currentIndex = 0;

        function changeWord() {
            const textElement = document.getElementById("changingText");
            textElement.textContent = `Danhinou ${words[currentIndex]}`;
            currentIndex = (currentIndex + 1) % words.length;
        }

        setInterval(changeWord, 6000); // Change le mot toutes les 2 secondes

const slides = document.querySelectorAll('.testimonial');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Démarrez le carrousel automatiquement
setInterval(nextSlide, 5000); // Changez l'intervalle selon vos préférences