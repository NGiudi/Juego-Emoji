<?php
	$host = "127.0.0.1";
	$user = "root";
	$pass = "";
	$base = "mydatabase";
	
	$enlace = mysqli_connect($host,$user,$pass,$base);

    $id = $_REQUEST["id"];

	if ($enlace == NULL)
        echo 'Error de conexión con a base de datos';
    else{
		$consulta = "SELECT film, result  FROM emojifilms WHERE id=$id";
		$request = mysqli_query($enlace, $consulta);
		$row = mysqli_fetch_assoc($request);

		//Mensaje Enviado para JavaScript.
		$film = $row['film'];
		$result = $row['result'];
		echo "$film;$result";
	}

	mysqli_close($enlace);
?>
