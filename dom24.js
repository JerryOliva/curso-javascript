


document.querySelector("#cambiar").addEventListener("click",()=>
{
    let colectorHtml=document.querySelectorAll("*");
    
    colectorHtml.forEach(componente=>
        {
            if(componente.tagName=="LI"|| componente.tagName=="P")
            {
                componente.style.color="blue";
            }
        })

    
})



    