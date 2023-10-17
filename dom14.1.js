let crearBoton=()=>
{
    document.querySelector("#simular").addEventListener("click",()=>{
			const time=60;
			const time2= Math.floor(Math.random()*15)+1;
			let clPosibles=clientesPosibles(time);
			let clReales=clientesReales(time2);

			document.querySelector("#resultado").textContent=` La cantidad de coches es: ${clPosibles}` 

		document.querySelector("#resultado1").textContent= ` La cantidad de clientes reales es:  ${clReales}`;
		})

		
}

let clientesPosibles=(time)=>
{
	let clientes=Math.floor(Math.random()*120)+1 / time; 
	return clientes;
}

let clientesReales=(time2)=>
{
	let clientes2= Math.floor(Math.random()*3)+1 / time2 ;
	return clientes2;
}


crearBoton();