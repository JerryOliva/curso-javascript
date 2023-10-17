let verificarPalabra=()=>
{
	document.querySelector("#boton_1").addEventListener("click",()=>
	{
		let parrafo=document.querySelector("#parrafo_1").textContent;
		let sintagma=document.querySelector("#entrada_1").value;
		
	if(parrafo.includes(sintagma))
	{
		document.querySelector("#resultado").textContent=`La palabra "${sintagma}" existe en la oración.`
	}
	else
	{
		document.querySelector("#resultado").textContent=`La palabra "${sintagma}" no existe en la oración.`;
	}
		
	})
}
	
verificarPalabra();
	


