let botonActualizar=()=>
{
    document.querySelector("#render").addEventListener("click", ()=>
    {
    
        let block= document.querySelector(".bloque1");

        block.style.width=document.querySelector("#ancho").value +"px";
        block.style.height=document.querySelector("#alto").value + "px";
        block.style.backgroundColor=document.querySelector("#color").value;
    })
    

}

botonActualizar();