const nombre=document.querySelector("#nombre");
const telefono=document.querySelector("#telefono");
const email=document.querySelector("#email");
const domicilio=document.querySelector("#direccion")

let escribirLocal=()=>
{
    document.querySelector("#agregar").addEventListener("click",()=>
    {
        const informacion= 
        {
            telefono: telefono.value,
            email:email.value,
            domicilio:domicilio.value
        }
        localStorage.setItem(nombre.value,JSON.stringify(informacion) );
        nombre.value=" ";
        telefono.value=" ";
        email.value=" ";
        domicilio.value=" ";
    })
   

    document.querySelector("#recuperar").addEventListener("click",()=>
    {
        const usuario = localStorage.getItem(nombre.value);
        if(usuario!=null)
        {
            const datos= JSON.parse(usuario)
            telefono.value=datos.telefono;
            email.value=datos.email;
            domicilio.value=datos.domicilio;

        }
        else 
        {
            alert("404 not found");
        }
    })

    
    
}

escribirLocal();