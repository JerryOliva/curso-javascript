let tiempo;
let cantDig=1;
const num=document.querySelector("#numero");
let numeroRec=numeroAleatorio(cantDig)
mostrarNum(numeroRec);

function numeroAleatorio(n)
{

    const numero = [0,1,2,3,4,5,6,7,8,9];
    const arreglo = [];
    arreglo.push(numero[Math.floor(Math.random()*9)+1]);
    for (let i=1; i<=n-1 ; i++)
    {
    
        arreglo.push(numero[Math.floor(Math.random()*10)]);
        
    }
    
    return parseInt(arreglo.join("")) 
    
    
    
}

function mostrarNum (numeroRec)
{
    num.textContent=numeroRec;
    num.style.visibility="visible";

    tiempo=setTimeout(()=>
    {
        num.style.visibility="hidden";
    }, 2000);

}

document.querySelector("#probar").addEventListener("click",()=>
{
    clearTimeout(tiempo)
    const numeroUser=parseInt(document.querySelector("#entrada").value);

    if(numeroUser==numeroRec)
    {
        cantDig++;
        numeroRec=numeroAleatorio(cantDig);
        mostrarNum(numeroRec);
        document.querySelector("#entrada").value=' '
        console.log(cantDig);
    }
    else 
    {
        alert("persiste")
    }
})

