const c1=document.querySelector("#c1");

document.querySelector("#reducir").addEventListener("click",()=>
{
    let radio=parseInt(c1.style.borderRadius)

    if(radio > 0)
    {
        radio -= 5 ;
        c1.style.borderRadius=radio + "%";
    }
})

document.querySelector("#aumentar").addEventListener("click",()=>
{
    let radio=parseInt(c1.style.borderRadius)

    if (radio<50)
    {
        radio+= 5

        c1.style.borderRadius= radio + "%";
    }
})