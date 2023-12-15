let paises=document.querySelector("#paises");

let importarPaises=(insercion)=>
{

    const data = insercion.map(dato=>
        `<tr>
        <td>${dato.nombre}</td>
        <td>${dato.capital}</td> 
        <td>${dato.idioma}</td> 
        <td>${dato.moneda}</td> 
        <td>${dato.poblacion}</td> 
        <td>${dato.bandera}</td> 
        <td>${dato.limites.map(pais=>pais)}</td>
        </tr>`)

    paises.innerHTML=data.join(" ");
    
}

async function recuperarPaises()
{
    let paisesImpo= await fetch("https://scratchya.com.ar/cursojs/recuperarpaises.php");
    let incrustar= await paisesImpo.json();
    importarPaises(incrustar);
}

recuperarPaises();