
let sumaOp=(a,b)=>
{
    return a+b;

}

let restaOp=(a,b)=>
{
    return a-b;
}

let multiOp=(a,b)=>
{

    try{
        if(a==0 || b==0)
        {
            throw new Error ("Ingresa un valor mayor a 0 en ambas variables")
        }
    }
    catch(error)
    {
        alert(error.message)
    }
    finally
    {
        return a*b;
    }
    
}

let diviOp=(a,b)=>
{
    try
    {
        if( b==0)
    {
        throw new Error("El segundo valor debe ser mayor de 0")
    }
    }
    catch(error)
    {
        alert(error.message)
        
    }
    finally
    {
        return a/b;
    }
}

export{ sumaOp, restaOp, multiOp, diviOp}