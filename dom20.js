
let botonConvertir=()=>
{
    document.querySelector("#convertir").addEventListener("click",()=>

    
    {

        const palabrasEmojis = 
[
    { emojis:"❤️",palabras:"corazon"},
    { emojis:"🌕 ",palabras:"luna"},
    { emojis:"⚡",palabras:"rayo"},
    { emojis:"🕞",palabras:"tiempo"},

]

        let emos= document.querySelectorAll(".emojis")

        emos.forEach(emoj=>emoj.textContent=convertirTexto(emoj.textContent))



        let convertirTexto=(emos)=>
{
    return palabrasEmojis.find(palabraEmoji=>palabraEmoji.emojis==emos).palabras;
    
}
    })
}



botonConvertir();