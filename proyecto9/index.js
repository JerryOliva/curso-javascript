const resultado=document.querySelector("#resultado");
const archivo=document.querySelector("#archivo");

function lecturArchivo(file)
{
    return new Promise((exist, none)=>
    {
        if(!file.name.endsWith(".html"))
        {
            none("Extensión de archivo incorrecta");
        }
        else{

            const fileReader1= new FileReader()
            fileReader1.readAsText(file);
            fileReader1.addEventListener("load",()=>
            {
                exist(fileReader1.result);
            })
        }
        
    })

}

let enviarArchivo=()=>
{
    archivo.addEventListener("change",(evento)=>
    {
        let file= evento.target.files[0];
        lecturArchivo(file)
        .then(response=>resultado.textContent=response)
        .catch(error=>resultado.textContent=error)
    })
}

enviarArchivo();