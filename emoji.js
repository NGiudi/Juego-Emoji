var teamA = document.querySelector ("#count-a"),
	countA = 0,
	teamB = document.querySelector ("#count-b"),
	countB = 0;
	
var pelis = ["<img src='img/viejo.png' alt='emojiViejo'>"
		  + "<img src='img/house.png' alt='emojiCasa'>"
          + "<img src='img/globo.png' alt='emojiGlobo'>"
		  + "<img src='img/globo.png' alt='emojiGlobo'>",
		  
		  "<img src='img/lupa.png' alt='emojiLupa'>"
		  + "<img src='img/pescado.png' alt='emojiPescado'>",
		
		  "<img src='img/uno.png' alt='emojiUno'>"
		  + "<img src='img/cero.png' alt='emojiCero'>"
		  + "<img src='img/uno.png' alt='emojiUno'>"
		  + "<img src='img/perro.png' alt='emojiPerro'>",

		  "<img src='img/hombre.png' alt='emojiHombre'>"
		  + "<img src='img/anillo.png' alt='emojiAnillo'>"
		  + "<img src='img/anillo.png' alt='emojiAnillo'>"
		  + "<img src='img/anillo.png' alt='emojiAnillo'>",

		  "<img src='img/chica2.png' alt='emojiChica2'>"
		  + "<img src='img/chica1.png' alt='emojiChica1'>"
		  + "<img src='img/munecoNieve.png' alt='emojiMuñecoNieve'>"
		  + "<img src='img/copoNieve.png' alt='emojiCopoNieve'>",

		  "<img src='img/tortuga.png' alt='tortuga'>"
		  + "<img src='img/espada.png' alt='espada'>",

		  "<img src='img/muerte.png' alt='muete'>"
		  + "<img src='img/pool.png' alt='pool'>"

		];

var respuestas = ["up altas aventuras",
				  "buscando nemo",
				  "101 dalmatas",
				  "señor de los anillos",
				  "frozen",
				  "tortugas ninjas",
				  "deadpool"];

var verif = new Array (pelis.length);



/*********************************************************
					INICIO DEL PROGRAMA
 ********************************************************/
// Variables del DOM.
const btnSubmit = document.querySelector ('#submit'),
	  input  = document.querySelector ("#text"),
	  form = document.querySelector ('form');

// Variables flag.
var firstClick = true, noTime = false; 

// Otras Variables.
var number, timer;

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
			verif [number] = true;						// flag para no repetir pelicula.
			addPoints ();
			newFilm();
			input.value = '';

			if (!noMoreElements())
				reloadTimer ();
		}
		else{
			// Respuesta incorrecta
			console.log ("respuesta incorrecta.");
		}
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
	
	number = generateNumber (0, pelis.length);	// nueva pelicula random.	
	pelicula.innerHTML = pelis [number];		// mostramos nueva pelicula en pantalla.
		
	return true;
}

function checkResult (){
	if (input.value.toLowerCase() === respuestas[number])
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

	console.log ("El numero generado es: ", random);
	return random;
}


/*********************************************************
					FUNCIONES DE TIEMPO
 ********************************************************/
// Sin tiempo.
function noMoreTime () {
	document.getElementById("time").innerHTML = 'NO MORE TIME';
	console.log ('Te has quedado sin tiempo.');
	verif [number] = true; 						// flag para no repetir pelicula.

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
// Aca voy a poner todas las funciones que manejan la logica con mi "base de datos". 
// Dps que aplique una base de datos real lo tengo que modificar.
function initFilmsFlag (){
	for (let i = 0; i < pelis.length; i++) {
		verif[i] = false;
	}
}

function noMoreElements (){
	for (let i = 0; i < pelis.length; i++) {
		if (verif[i] == false) return false; 
	}

	return true;
}