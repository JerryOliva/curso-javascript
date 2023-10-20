const paCen=["imbecil","pinche","pendejo","puto"];


let crearBoton=()=>
{
document.querySelector("#ver").addEventListener("click",()=>
{
    const oracion=document.querySelector("#oracion").value.split(" ");

		let censura= verTexto(oracion);
		if(censura!=false)
		{
			document.querySelector("#respuesta").textContent="Los comentarios no cumplen con las políticas del foro"
		}
		else
		{
			document.querySelector("#respuesta").textContent=" Gracias por tu opinión"
		}

	
})
}

let verTexto=(oracion)=>
{
	let censure=false 
	for(let palabra of paCen)
	{
		if(oracion.includes(palabra))
		{
			censure=true
			break;
		}
	}
	return censure; 
}


crearBoton();
verTexto();