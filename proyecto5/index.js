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

document.querySelector("#union").innerText=unionConjuntos();


cambioColor();


import unionConjuntos from "./conjuntos.js";