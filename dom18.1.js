
let crearEntradas=()=>
{
	let html= " "

	for (let i=1; i<=10; i++)
	{
		html+= `<div><input type="number"></div>`
	}
	document.querySelector("#entradas").innerHTML=html;
}

let botonSumar=()=>
{
	document.querySelector("#sumar").addEventListener("click",()=>
{

	let sumarNumeros=sumaNumeros();

	document.querySelector("#resultado").textContent= `La suma es ${sumarNumeros}`;

})

}

let sumaNumeros=()=>
{
	let inputs = document.querySelectorAll("#entradas input");

	let suma=0;
	
	inputs.forEach(inp=> suma+=parseInt(inp.value));
	
	return suma;

	

}

crearEntradas();
botonSumar();