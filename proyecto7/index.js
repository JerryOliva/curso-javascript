const nombre=document.querySelector("#nombre");

const comentario= document.querySelector("#comentario");

const lista1= document.querySelector("#lista1");

let agregaComentario=()=>
{

    document.querySelector("#agregar").addEventListener("click",()=>
    {
        localStorage.setItem(nombre.value, comentario.value);
        nombre.value=" ";
        comentario.value=" ";
        
       

    })

}


function lista ()
{
    let clientes=" ";
    for(let i=0; i<localStorage.length; i++)
    {
        clientes+= localStorage.key(i) + "<br>"+ localStorage.getItem(localStorage.key(i))+"<hr>";
    }
    lista1.innerHTML=clientes;

}
agregaComentario();
lista();
