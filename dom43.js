const ancho= window.innerHeight-50;
const alto= window.innerHeight-50;
let prox=1;
const posiciones =[];

let cargaEvento=()=>
{
    for(let i=1;i<=60; i++)
{
    const div = document.createElement('div');
    div.classList.add('numero');
    //const posx = Math.floor(Math.random()*ancho);
    //const posy = Math.floor(Math.random()*alto);
    let [posx,posy]= posicionCorrecta();
    div.style.left=posx+"px";
    div.style.top=posy+"px";
    div.textContent=i;
    document.querySelector("#numeros").append(div);
    div.addEventListener("click",evento=>
    {
        const valor= parseInt(evento.target.textContent)
        if(valor==prox)
        {
            prox=valor+1
            evento.target.remove()
            if(document.querySelector("#numeros").children.length==0)
            {
                alert("Ganaste")
            }
        }
        else 
        {
            alert("Has perdido");
            borrarNumero();
        }
       
    }) 

    let borrarNumero=()=>
    {
        document.querySelector("#numeros").innerHTML=" ";
    }
    
}
}

let posicionCorrecta=()=>
{
    let repetir;
    let posx;
    let posy;
    do{
    repetir=false;
    posx=Math.floor(Math.random()*ancho);
    posy=Math.floor(Math.random()*alto);
    for(posicion of posiciones)
    {
        if(Math.abs(posx-posicion.x)<50 && Math.abs(posy-posicion.y)<50)
        {
            repetir=true
        }

    }
    }while(repetir)
    posiciones.push({x:posx , y:posy});
    return [posx,posy]
}
cargaEvento();


