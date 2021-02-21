const CANT_FILMS = 7;

/*********************************************************
					INICIO DEL PROGRAMA
 ********************************************************/
const teamA = document.querySelector ("#count-a"),
	  teamB = document.querySelector ("#count-b"),
	  boxFilm = document.querySelector ("#box-film"),
	  btnSubmit = document.querySelector ('#submit'),
	  input  = document.querySelector ("#text"),
	  form = document.querySelector ('form');

var firstClick = true, noTime = false, verif = new Array (CANT_FILMS);	// Variables flag.
var timer, countA = 0, countB = 0;											// Otras Variables.
var ObjFilm = {																// Objeto con la información de la película. 
	id: undefined,
	film: undefined,
	images: undefined
};

initFilmsFlag ();

// Acciones luego del click.
form.addEventListener ("submit", function (e){
	e.preventDefault ();

	if (!noMoreElements()){
		// Empezamos el juego.
		if (firstClick === true){
			newFilm(); 
			countDown (120);
			btnSubmit.value = 'Continuar';
			firstClick = false;
		}
		else if (checkResult ()){
			// Respuesta correcta
			input.value = '';
			verif [ObjFilm.id - 1] = true;						// flag para no repetir pelicula.
			addPoints ();
			newFilm();

			if (!noMoreElements())
				reloadTimer ();
		}
		// Respuesta incorrecta
	}
});

/*********************************************************
					FUNCIONES DE LÓGICA
 ********************************************************/
function newFilm(){
	if (noMoreElements()){
		console.log ("No hay más peliculas en la base de datos.");
		clearInterval (timer);
		return false;
	}
	
	ObjFilm.id = generateNumber (0, CANT_FILMS) + 1;			// Generamos un id de peícula random.
	getFilmFromDB (ObjFilm.id);									// Buscamos la película en la base de datos.

	return true;
}

function checkResult (){
	if (input.value.toLowerCase() === ObjFilm.film)
		return true;
	else
		return false;
}

function addPoints (){
	countA++;
	teamA.innerHTML = countA;
}

function generateNumber (min, max){
	let random;
	
	do {
		random = Math.floor(Math.random() * (max-min) + min);
	} while (verif[random]);

	console.log (`numero generado: ${random}`);
	return random;
}


/*********************************************************
					FUNCIONES DE TIEMPO
 ********************************************************/
// Sin tiempo.
function noMoreTime () {
	document.getElementById("time").innerHTML = 'NO MORE TIME';
	console.log ('Te has quedado sin tiempo.');
	verif [ObjFilm.id - 1] = true; 									// flag para no repetir pelicula.

	if (newFilm ())
		countDown (120);
}

// Lógica de reinicio del timer.
function reloadTimer (){
	clearInterval(timer);
	countDown (120);
}

// Lógica del contador descendiente.
function countDown (seconds){
	timer = setInterval (()=>{
		let remainSeconds = ('0' + (seconds % 60)).slice(-2),
		    remainMinutes = Math.floor (seconds /60) % 60;

		document.getElementById("time").innerHTML = `${remainMinutes}:${remainSeconds}`;
		seconds--;

		if (seconds < 0){	
			clearInterval(timer);
			noMoreTime ();
		}
	}, 1000);
}


/*********************************************************
				FUNCIONES PARA LA BASE DE DATOS
 ********************************************************/
function getFilmFromDB(id) {
	let xhttp = new XMLHttpRequest();
	
	xhttp.onreadystatechange = function() {										// AJAX.
		if (this.readyState == 4 && this.status == 200){
			const posDivision = this.responseText.indexOf(";", 0);
			ObjFilm.film = this.responseText.substr(0, posDivision);	
			boxFilm.innerHTML = this.responseText.substr(posDivision + 1); 
		}
	};

	xhttp.open("GET", "requestDB.php?id=" + id, true);
	xhttp.send();
}

function initFilmsFlag (){
	for (let i = 0; i < CANT_FILMS; i++) {
		verif[i] = false;
	}
}

function noMoreElements (){
	for (let i = 0; i < CANT_FILMS; i++) {
		if (verif[i] == false) return false; 
	}

	return true;
}