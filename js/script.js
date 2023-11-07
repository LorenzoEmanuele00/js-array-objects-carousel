const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let imagesBig = ``;
let imageList = ``;

for (let i = 0; i < images.length; i++) {

    imagesBig += `
    <div class="item">
        <img src="${images[i].image}">
        <div class="txt">
            <h2>${images[i].title}</h2>
            <p>${images[i].text}</p>
        </div>
    </div>
    `;

    imageList += `<img class="slide" src="${images[i].image}">`;
}

document.querySelector(".items").innerHTML += imagesBig; 
document.querySelector(".slides").innerHTML += imageList; 


// APPLY ACTIVE TO 1ST ELEMENT
let activeIndex = 0;
const slides = document.querySelectorAll(".item");
const slidesLateral = document.querySelectorAll(".slide");
console.log (slides);

slidesLateral[activeIndex].classList.add("active-icon")
slides[activeIndex].classList.add("active");


// APPLY SWITCH IMG WHEN CLICK ARROW
document.querySelector(".prev").addEventListener("click", function() {
    slides[activeIndex].classList.remove("active");
    slidesLateral[activeIndex].classList.remove("active-icon");
    if (activeIndex != 0) {
        --activeIndex;    
    } else {
        activeIndex = slides.length - 1;
    }
    slidesLateral[activeIndex].classList.add("active-icon");
    slides[activeIndex].classList.add("active");
});

document.querySelector(".next").addEventListener("click", function() {
    slides[activeIndex].classList.remove("active");
    slidesLateral[activeIndex].classList.remove("active-icon");
    if (activeIndex != slides.length - 1) {      
        ++activeIndex;     
    } else {
        activeIndex = 0;
    }
    slidesLateral[activeIndex].classList.add("active-icon");
    slides[activeIndex].classList.add("active");
});

