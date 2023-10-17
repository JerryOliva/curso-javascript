const frutas=[
	{
		nombre: "pera", 
		calorias: 105
	},
	{
		nombre:"uva",
		calorias: 35
	},
	{
		nombre: "sandía",
		calorias: 60
	},
	{
		nombre: "mango",
		calorias: 26
	},
	{
		nombre: "melon",
		calorias: 89
	},
	{
		nombre: "manzana",
		calorias: 36
	},
	{
		nombre:"durazno",
		calorias: 230
	}
]

let imprimirFrutas=(frutas)=>
{
	let frutasPrint=frutas.map(fruta=>fruta.nombre);
	document.querySelector("#frutas").textContent=frutasPrint.join(" / ");
}

imprimirFrutas(frutas);

document.querySelector("#boton1").addEventListener("click",()=>
{
	let fruta=document.querySelector("#fruta").value;
	let calorias=retornarCalorias(fruta)
	if(calorias!=null)
	{
		document.querySelector("#resultado").innerHTML= `fruta: ${fruta} <br> contenido calórico: ${calorias} calorías`
	}
	else 
	{
		document.querySelector("#resultado").textContent=`404 not found`
	}
})

let retornarCalorias=(fruta)=>
{
	const busqueda= frutas.find(frutaB=>frutaB.nombre==fruta)
	if(busqueda!=null)
	{
		return busqueda.calorias;
	}
	else 
	{
		return null;
	}
}