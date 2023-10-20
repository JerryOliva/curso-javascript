let crearBoton=()=>
{
    document.querySelector("#verifica").addEventListener("click",()=>
    {
        const palabra=document.querySelector("#palabra").value
        
				switch (palabra)
				{
					case "pierna": 
												document.querySelector("#respuesta").textContent="¡Adivinaste!";
												break;
					case "pito": 
												document.querySelector("#respuesta").textContent="¡Adivinaste!"
												break;
					case "arabe": 
												document.querySelector("#respuesta").textContent="¡Adivinaste!"
												break;
					case "corazon roto": 
												document.querySelector("#respuesta").textContent="¡Adivinaste!"
												break;
					case "enojo": 
												document.querySelector("#respuesta").textContent="¡Adivinaste!"
												break;


					default: document.querySelector("#respuesta").				textContent="Vuelve a intentar";
					break;
				}
				
			
    })
}

crearBoton();