let contraseñas=()=>
{
	const c1=document.querySelector("#contraseña").value;
	const c2=document.querySelector("#contraseña1").value;
	let passwords=[c1,c2];
	return passwords;
}

let botonConfirmar=()=>
{
	document.querySelector("#confirmar").addEventListener("click",()=>
	{
		let [c1,c2]=contraseñas();

		let caracteres=NumeroCaracteres(c1,c2);
		document.querySelector("#resultado").textContent=caracteres;

		if(c1.length<8)
		{
			document.querySelector("#resultado").textContent="solo se permiten contraseñas de 8 caracteres"
		}
			

	})

}

let botonVer=()=>
{
	document.querySelector("#ver").addEventListener("click",()=>
	{
		let [c1,c2]=contraseñas();
		
		alert(`Contraseña 1: ${c1}\n Contraseña 2: ${c2}`);

	})
}

let NumeroCaracteres=(c,c2)=>
{
	if(c!=c2)
	{
		let coinciden=document.querySelector("#resultado").textContent="Las claves no coinciden"
		return coinciden;
	}
	else
	{
		let discrepan=document.querySelector("#resultado").textContent="Contraseñas confirmadas";
		return discrepan;
	}
	
}

botonConfirmar();
botonVer();