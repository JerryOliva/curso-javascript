const numero=["uno","dos","tres","cuatro"];

let interNum=(array)=>
{
    for(let i=1; i<=array.length;i++)
    {
        document.querySelector(`#item${i}`).textContent+=`(${array[i-1]})`
    }
}

interNum(numero);