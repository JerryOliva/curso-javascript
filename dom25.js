const menu=document.querySelector("#menuopciones");

let bot1=()=>
{
	document.querySelector("#boton1").addEventListener("click",()=>
	{
	menu.className=" ";
	menu.classList.add("menu", "menu-izquierda");
	})

}

let bot2=()=>
{
	document.querySelector("#boton2").addEventListener("click",()=>
	{
		menu.className=" ";
		menu.classList.add("menu", "menu-derecha");
	})
}

let bot3=()=>
{
document.querySelector("#boton3").addEventListener("click", ()=>
{
	menu.className=" ";
	menu.classList.add("menu","menu-espaciado");
})
}
bot1();
bot2();
bot3();