var i = 0;

function cuenta(){
	i = i + 1;
	//Manda el mensaje a la página
	postMessage(i);
	//Cada 500 milisegundos ejecuta
	//de nuevo cuenta()
	setTimeout("cuenta()",500);
}
cuenta();