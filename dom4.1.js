const chistes=[
	"¿Qué tiene en común un político y una mierda?, todo...",
	"Cuál es la zona horaria para los conejos, Zanahoria",
	"Cómo anda un burro sin patas, bien parado",
	"Qué sabor tiene el camote ancho enmielado"]

	let cargaChiste=(array)=>
	{
	return array[Math.floor(Math.random()*array.length)].replace(",","<br>")
	}

	document.querySelector("#chiste").innerHTML="<strong> Chascarrillo: </strong>"+cargaChiste(chistes);

