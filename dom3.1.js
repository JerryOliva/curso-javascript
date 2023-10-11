let bolillero=[];

let Crearbolilla=()=>
{
    while(bolillero.length!=50)
    {
        let num=Math.floor(Math.random()*50)+1;
        if(!bolillero.includes(num))
        {
            bolillero.push(num);
        }
    }
    return bolillero;
     
} 

let numerosGanadores=(array)=>
{
    let numerosG=array.slice(0,6).join("-")
    return numerosG;
}

bolillero=Crearbolilla();
document.querySelector("#numeros").innerHTML="<strong>Listado de numeros: </strong>"+bolillero.join(" - ")

document.querySelector("#numerosganadores").innerHTML = "<strong>Los numeros ganadores son: </strong>"+numerosGanadores(bolillero);


