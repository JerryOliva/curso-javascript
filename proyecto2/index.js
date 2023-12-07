let insertarList=()=>
{
    const paisesLista=document.querySelector("#paises");

    paisesLista.innerHTML=convertirArreglo();
}

let insertarMayor=()=>
{
    const mayor=document.querySelector("#mayor");

    mayor.textContent=mayorInflacion();
}

let insertarOrdenado=()=>
{
    const orden=document.querySelector("#paisesOrdenados");
    
    orden.innerHTML=ordenarLista();
}
insertarList();
insertarMayor();
insertarOrdenado();

import { convertirArreglo, mayorInflacion, ordenarLista} from "./objetos.js";