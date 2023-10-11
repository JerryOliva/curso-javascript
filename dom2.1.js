let mItem=()=>
{
    const items=[100,8000,400]

    for(let it of items)
    {
    document.querySelector("#item").textContent(parseInt(item.reduce((acumulador,ite)=>acumulador+=ite)))
    }   


}


mItem();



