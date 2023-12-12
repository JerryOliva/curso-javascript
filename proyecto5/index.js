let cambioColor=()=>
{
    setInterval(()=>
    {
        let color = Math.floor(Math.random()*255)
        let color2 = Math.floor(Math.random()*255)
        let color3= Math.floor(Math.random()*255);  
        document.body.style.backgroundColor=`rgb(${color} , ${color2} , ${color3})`;
     
    }
   ,5000)
    
}

document.querySelector("#union").innerHTML="Lenguajes que conocen los socios "+"<br>"+ unionConjuntos();

document.querySelector("#interseccion").innerText=" Lenguaje común entre socios " +interseccionConjuntos();


let cargaEmail=()=>
{
    const email= document.querySelector("#email");

    document.querySelector("#confirmar").addEventListener("click",()=>
    {
        localStorage.setItem("email", email.value)
    })

    const actual= localStorage.getItem("email");

    if(actual!=null)
    {
        email.value=actual;
    }
}





cambioColor();
cargaEmail();

import { interseccionConjuntos } from "./conjuntos.js";
import unionConjuntos from "./conjuntos.js";