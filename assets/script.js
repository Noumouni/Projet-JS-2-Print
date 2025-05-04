const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


slides.length;
console.log(slides)

let index = 0;

const flecheDroite = document.querySelector(".arrow_right"); 
const flecheGauche = document.querySelector(".arrow_left"); 

const points = document.querySelectorAll(".dot");
const imageElement = document.querySelector(".banner-img");
const paragraphe = document.getElementById("paragraph");

function majSlide() {
	imageElement.src = `./assets/images/slideshow/${slides[index].image}`;
	paragraphe.innerHTML = slides[index].tagLine;
	points.forEach(p => p.classList.remove("dot_selected"));
	points[index].classList.add("dot_selected");
}

flecheDroite.addEventListener('click', () => {
	console.log("j'ai cliqué sur la flèche droite");
	index++;
	if (index >= slides.length) {
		index = 0;
	}
	majSlide();
});

flecheGauche.addEventListener('click', () => {
	console.log("j'ai cliqué sur la flèche gauche");
	index--;
	if (index < 0) {
		index = slides.length - 1;
	}
	majSlide();
});




