const persona1=
{
    nombre: "Marian",
    email: "marian@example.com",
    lenguajes: new Set(["java", "ruby", "python"])

}

const persona2=
{
    nombre: "Pablo",
    email: "pablo@example.com",
    lenguajes: new Set(["javascript", "ruby", "python","c++"])

}

const persona3=
{
    nombre: "Adrian",
    email: "adrian@example.com",
    lenguajes: new Set(["javascript", "react", "python"])

}

let unionConjuntos=()=>
{
    let union= new Set([...persona1.lenguajes,...persona2.lenguajes,...persona3.lenguajes]);
    let descompresion=[...union];
    return descompresion.join(" ");
}

let interseccionConjuntos=()=>
{
    
}
export default unionConjuntos;