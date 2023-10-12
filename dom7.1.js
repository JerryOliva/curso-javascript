document.querySelector("#botonmenos").addEventListener("click",()=>
{
    let valor=parseInt(document.querySelector("#resultado").textContent)
		if(valor>0)
		{
			valor--
			document.querySelector("#resultado").textContent=valor;
		}
})

document.querySelector("#botonmas").addEventListener("click",()=>
{
	let valor=parseInt(document.querySelector("#resultado").textContent);
	if(valor<10)
	{
		valor++
		document.querySelector("#resultado").textContent=valor;
	}
})