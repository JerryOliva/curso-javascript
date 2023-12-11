let cargaNumeros=()=>
{
    const lista=document.querySelector("#numeros");
    let conjunto = new Set();
    for(let i=0; i<10; i++)
    {
        
        conjunto.add(Math.floor(Math.random()*100)+1)
        console.log(conjunto)

        
        
    }
    
    for(let valor of conjunto)
        {
            const li=document.createElement("li")
            li.textContent=valor
            lista.appendChild(li)
        }
    
        const resultado=document.querySelector("#respuesta");
    
        resultado.textContent="la suma total es "+ sumatoria(conjunto);

        const mayor=document.querySelector("#mayor");

        mayor.textContent= " El numero mayor es: " + mayorNumero(conjunto);
}

import mayorNumero from "./mayor.js";
import sumatoria from "./sumar.js";
export default cargaNumeros;