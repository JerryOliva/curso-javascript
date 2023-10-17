let crearBoton=()=>
{
	document.querySelector("#verificar").addEventListener("click",()=>
	{
	
		flag=[];
		for (let i=1; i<=4; i++)
		{
			flag.push(document.querySelector(`#materia${i}`).checked)
		}

		console.log(flag);

		const cantidad= flag.reduce((cont,selector)=> cont + (selector? 1:0));

		if(cantidad<=2)
		{
			document.querySelector("#resultado").textContent="Numero correcto de materias";
		}
		else 
		{
			document.querySelector("#resultado").textContent="Numero incorrecto de materias";
		}

	})
	
}

crearBoton();