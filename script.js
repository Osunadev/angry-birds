// Prototipos de clases
class Personaje {
	constructor(nombre, forma, posicion) {
		this.nombre = nombre;
		this.forma = forma;
		this.posicion = posicion;
	}

	obtDetalles() {
		alert(
			`Nombre: ${this.nombre}\nForma: ${this.forma}\nPosicion: ${this.posicion}`
		);
	}
}

class Ave extends Personaje {
	constructor(nombre, forma, posicion, habilidad, masa) {
		super(nombre, forma, posicion);
		this.masa = masa;
		this.habilidad = habilidad;
	}

	volar() {
		console.log('Woooooh, estoy voldando, wing wing!');
	}
}

class Pig extends Personaje {
	constructor(nombre, forma, posicion, fortaleza, puntos) {
		super(nombre, forma, posicion);
		this.fortaleza = fortaleza;
		this.puntos = puntos;
	}

	morir() {
		console.log('Me han convertido en tocino :(((');
	}
}

// Variables

const idBirds = [
	'red-bird',
	'blue-bird',
	'black-bird',
	'yellow-bird',
	'white-bird'
];

const birds = [
	new Ave('Terence', 'Circular', '0 / 0', 'Destructor de cerdos', 'Mediana'),
	new Ave('The Blues', 'Circular', '0 / 0', 'Rapidez', 'Pequeña'),
	new Ave('Bomb', 'Circular', '0 / 0', 'Explotar', 'Grande'),
	new Ave('Chuck', 'Triangular', '0 / 0', 'Hiperactividad', 'Mediana'),
	new Ave('Matilda', 'Ovalada', '0 / 0', 'Fuerza', 'Grande')
];

const nameBirds = ['Terence', 'The Blues', 'Bomb', 'Chuck', 'Matilda'];

let idxSelectedBird = 0;
const birdImageContainers = idBirds.map(idBird => {
	return document.getElementById(idBird);
});

const statNombre = document.getElementById('stat-nombre');
const statForma = document.getElementById('stat-forma');
const statPosicion = document.getElementById('stat-posicion');
const statMasa = document.getElementById('stat-masa');
const statHabilidad = document.getElementById('stat-habilidad');

const drawBird = idBird => {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, 50, canvas.height);
	let selectedImg = document.getElementById(idBird).children[0];
	ctx.drawImage(selectedImg, 10, canvas.height - 35, 25, 25);
};

window.onload = () => {
	const canvas = document.querySelector('canvas');
	const ctx = canvas.getContext('2d');

	const pigImage = new Image();
	pigImage.src = './imgs/piggy.png';

	drawBird(idBirds[idxSelectedBird]);
	updateData(birds[idxSelectedBird]);

	pigImage.onload = () => {
		ctx.imageSmoothingEnabled = false;
		ctx.drawImage(pigImage, canvas.width - 50, canvas.height - 35, 25, 25);
	};
};

const handleBird = newIndex => {
	birdImageContainers[idxSelectedBird].classList = 'not-selected';
	idxSelectedBird = newIndex;
	birdImageContainers[idxSelectedBird].classList = 'selected';

	drawBird(idBirds[idxSelectedBird]);
	updateData(birds[idxSelectedBird]);
};

const updateData = ({ nombre, forma, posicion, masa, habilidad }) => {
	statNombre.innerText = nombre;
	statForma.innerText = forma;
	statPosicion.innerText = posicion;
	statMasa.innerText = masa;
	statHabilidad.innerText = habilidad;
};

const startGame = () => {
	alert(
		'Lo sentimos, estamos trabajando en la animacion de ANGRY BIRDS BETA...'
	);
};
