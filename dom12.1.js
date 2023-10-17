const peliculas=[
	{ nombre: "Zion is Posible", genero:"comedia"},
	{ nombre: "Armas y dolores", genero:"guerra"},
	{ nombre: "Cambios inesperados no?", genero:"terror"},
	{ nombre: "Ambientes simultuaneos", genero:"comedia"},
	{ nombre: "Ambientes simultuaneos 2", genero:"comedia"},
	{ nombre: "Crisis ilusoria", genero:"terror"},
	{ nombre: "Sus destinos se alinean", genero:"guerra"},
	{ nombre: "Desgarrando la mentira", genero:"Terror"},
]

let crearBoton=(peliculas)=>
{
	document.querySelector("#listado").addEventListener("click",()=>
{
	const checkTerror=document.querySelector("#terror");
	const checkComedia=document.querySelector("#comedia");
	const checkGuerra=document.querySelector("#guerra");

	const listado=[];

	for(let pelicula of peliculas)
	{
		if(checkTerror.checked && pelicula.genero=="terror")
	{
		listado.push(`${pelicula.nombre} - ${pelicula.genero}`);
	}
	else 
	{
		if(checkComedia.checked && pelicula.genero=="comedia")
		{
			listado.push(`${pelicula.nombre} - ${pelicula.genero}`);
		}
		else
		{
			if(checkGuerra.checked && pelicula.genero=="guerra")
			{
				listado.push(`${pelicula.nombre} - ${pelicula.genero}`);
			}
		}

		document.querySelector("#resultado").innerHTML=listado.join("<br>");
	}
	
	}
})
}

crearBoton(peliculas);
