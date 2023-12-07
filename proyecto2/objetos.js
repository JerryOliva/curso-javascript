const paises= [
    {
        pais: "Francia", inflacion: "34.5%"
    },
    {
        pais: "Italia", inflacion: "140%"
    },
    {
        pais: "España", inflacion: "33%"
    },
    {
        pais: " México", inflacion: "5%"
    },
    {
        pais: "Venezuela", inflacion: "4%"
    }
]





let convertirArreglo=()=>
{
   
    return paises.map(pais=>
        `<li> ${pais.pais} , ${pais.inflacion} </li>`).join("") 
      
}

let mayorInflacion =()=>
{
    let mayor = paises[0].pais;
    let inf= paises[0].inflacion;

    for(let i=1 ; i< paises.length; i++)
    {
        if(paises[i].inflacion>inf);
        {
            inf=paises[i].inflacion;
            mayor=paises[i].pais;
        }
    }

    return mayor;
}

let ordenarLista =()=>
{
    paises.sort((a,b)=> a.inflacion-b.inflacion);
    convertirArreglo();
}

export{ convertirArreglo, mayorInflacion, ordenarLista }