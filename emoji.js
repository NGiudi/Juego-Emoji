var button = document.getElementById("myButton"), 
	output = document.getElementById("peliculla"),
	input  = document.getElementById("text");

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
				  "Señor de los anillos",
				  "Frozen",
				  "Tortugas Ninjas",
				  "deadpool"];

var verif = new Array (pelis.length),
	numero = generateNumber();

// Cuando entro a la pagina imprimo la primer pelicula.
pelicula.innerHTML = pelis [numero];
initFlagPeliculas ();

function printPelicula(){
	console.log ("La pelicula es:" + respuestas[numero]);
}

function initFlagPeliculas ()
{
	for (let i = 0; i < pelis.length; i++) {
		verif[i] = false;
	}
}

function finListaPeliculas ()
{
	for (let i = 0; i < pelis.length; i++) {
		if (verif[i] == false) return false; 
	}

	return true;
}

function generateNumber (){
	let min = 0, max = pelis.length;
	let random = Math.floor(Math.random() * (max-min) + min);
	console.log ("El numero generado es: ", random);
	return random;
}

button.addEventListener ("click", function(){
	
	if (input.value.toUpperCase() === respuestas[numero].toUpperCase()){
		console.log ("Respuesta Correcta!");
		input.classList.remove ("error");
		verif [numero] = true;
		input.value = '';

		if (finListaPeliculas() === true){
			console.log ("No hay más peliculas en la base de datos.");
			return;
		}
		
		do{
			numero = generateNumber();
		} while (verif[numero] == true);

		pelicula.innerHTML = pelis [numero];
		
	}
	else{
		input.classList.add ("error");
	}
})



