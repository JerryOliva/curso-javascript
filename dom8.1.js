
//Botones de Acción
	document.querySelector("#sumar").addEventListener("click",()=> {

		operar("sumar");
	 })

	 document.querySelector("#restar").addEventListener("click",()=>
	 {
		operar("restar");
	 })


//Operaciones con los valores ingresados
let operar=(operacion)=>
{
	const v1=parseInt(document.querySelector("#linea_1").value);
	const v2=parseInt(document.querySelector("#linea_2").value);
	 if(operacion=="sumar")
	 {
		const suma=v1+v2;
		document.querySelector("#resultado").textContent=suma;
	 }
	 else
	 {
		if(operacion=="restar")
		{
			let resta=v1-v2;
			document.querySelector("#resultado").textContent=resta;
		}
	 }

}



//Funciones
cargaParrafo1();
operar(operacion);


