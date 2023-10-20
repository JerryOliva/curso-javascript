let botonMostrar=()=>
{
	document.querySelector("#mostrar").addEventListener("click",()=>
	{
		const lista = document.querySelectorAll(".pendiente")

		let pendientes1= " "
		
		lista.forEach(pen=> pendientes1+=(pen.textContent+"<br>"));

		document.querySelector("#respuesta").innerHTML=pendientes1

	})
}

botonMostrar();