let resultado= document.querySelector("#resultado");


let aFetch=()=>
{
    document.querySelector("#recuperar").addEventListener("click",()=>
    {
        cargaImagen("https://scratchya.com/ar/cursojs/imagenes/brasil.png")
        .then(response=> resultado.appendChild(imagen))
        .catch(error=> resultado.textContent=error)

    })
    
}

function cargaImagen(url)
{
    return new Promise((resultado,notFound)=>
    {

        const image= new Image();
        image.src=url;
        image.addEventListener("load",()=>
        {
            resultado(image);
        })

        image.addEventListener("error",()=>
        {
            notFound("404 not found")
        })
    })
}

aFetch();