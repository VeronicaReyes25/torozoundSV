// Código para el slider de las cards
let currentIndex = 0;
const cardsToShow = 3; // Mostrar 3 cards
const totalCards = 27; // Total de cards

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + cardsToShow) % totalCards;
    updateSlider();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - cardsToShow + totalCards) % totalCards;
    updateSlider();
});

function updateSlider() {
    const slider = document.getElementById('slider');
    const offset = -(currentIndex * (100 / cardsToShow));
    slider.style.transform = `translateX(${offset}%)`;
}

// Crear 30 cards dinámicamente
const sliderContent = document.getElementById('slider');
for (let i = 1; i <= totalCards; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Perfil ${i}" class="card-img">
        <h3>Nombre ${i}</h3>
        <p>Información sobre el elemento ${i}.</p>
        <a href="https://example.com" class="card-btn">Ir a Página ${i}</a>
    `;
    sliderContent.appendChild(card);
}


// Animación de texto
const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

	const words = elem.textContent.split(' ');
	elem.innerHTML = '';

	words.forEach((el, index) => {
		words[index] = `<span><i>${words[index]}</i></span>`;
	});

	elem.innerHTML = words.join(' ');

	const children = document.querySelectorAll('span > i');
	children.forEach((node, index) => {
		node.style.animationDelay = `${index * .2}s`;
	});

});


