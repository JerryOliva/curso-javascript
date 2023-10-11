let crearArray=()=>
{
				
    const n1= parseInt(document.querySelector("#object1").textContent);
		const n2=parseInt(document.querySelector("#object2").textContent);
		const n3=parseInt(document.querySelector("#object3").textContent);
		a1.push(n1,n2,n3);
		return a1
}

let mayArray=(array)=>
{
	let may=array[0];
	for (let numero of array)
	{
		if(numero>may)
		{
			may=numero;
		}
	}
	return may;
}

let a1=[];
crearArray();
document.querySelector("#mayor").textContent="El numero mayor es "+mayArray(a1)
console.log(a1)
