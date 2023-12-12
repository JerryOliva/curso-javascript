const programadores=
[
    {
    nombre: "Marian",
    email: "marian@example.com",
    lenguajes: new Set(["java", "ruby", "python"])

    },

    {
        nombre: "Pablo",
        email: "pablo@example.com",
        lenguajes: new Set(["javascript", "ruby", "python","c++"])
    
    }
    
    ,

    {
        nombre: "Adrian",
        email: "adrian@example.com",
        lenguajes: new Set(["javascript", "react", "python"])
    
    }
]


let unionConjuntos=()=>
{
    let lenguajesPrograms= new Set()
    for ( let programador of programadores)
    {
        for(let lenguaje of programador.lenguajes)
        {
            lenguajesPrograms.add(lenguaje)
        }
    }

    let des=[...lenguajesPrograms]

    return des.join(" ")
}

let interseccionConjuntos=()=>
{
    let lenguas= [...programadores[0].lenguajes]

    for(let programador of programadores)
    {
        lenguas= lenguas.filter(lng=> programador.lenguajes.has(lng));
    }

    let descompresion= [...lenguas];
    return descompresion.join(" ")
}
export default unionConjuntos;
export {interseccionConjuntos};