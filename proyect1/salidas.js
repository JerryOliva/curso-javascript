let clickEvento=()=>
{
   
    const sumar= document.querySelector("#sumar");
    const restar= document.querySelector("#restar");
    const multiplicar = document.querySelector("#multiplicar");
    const division = document.querySelector("#division");
    const resultado= document.querySelector("#resultado");
    
    sumar.addEventListener("click", ()=>
    {
        const v1=parseInt(document.querySelector("#v1").value);
        const v2=parseInt(document.querySelector("#v2").value)
        resultado.textContent=`LA SUMA DE LOS VALORES ES: ${sumaOp(v1,v2)} `;
    })
}

restar.addEventListener("click",()=>
{
        const v1=parseInt(document.querySelector("#v1").value);
        const v2=parseInt(document.querySelector("#v2").value)
        resultado.textContent=`LA RESTA DE LOS VALORES ES: ${restaOp(v1,v2)} `;
})

multiplicar.addEventListener("click",()=>
{
    const v1= parseInt(document.querySelector("#v1").value);
    const v2= parseInt(document.querySelector("#v2").value);
    resultado.textContent=` LA MULTIPLICACIÓN DE LOS VALORES ES: ${ multiOp(v1,v2)}`;
})

division.addEventListener("click", ()=>
{
    const v1=parseInt(document.querySelector("#v1").value);
    const v2= parseInt(document.querySelector("#v2").value);
    resultado.textContent= ` LA DIVISIÓN DE LOS DOS VALORES ES: ${diviOp(v1,v2)}`;
})

import { sumaOp } from "./operacionesBásicas.js";
import { restaOp } from "./operacionesBásicas.js";
import { multiOp } from "./operacionesBásicas.js";
import { diviOp } from "./operacionesBásicas.js";

clickEvento();