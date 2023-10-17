const frutos=[
    { nombre:"Pera", calorias:69},
    { nombre:"Coco", calorias:30},
    { nombre:"Durazno", calorias:78},
    { nombre:"Uva", calorias:39},
    { nombre:"Manzana", calorias:59},
    { nombre:"Higo", calorias:20},
    { nombre:"Granada", calorias:34},
    { nombre:"Melón", calorias:49},
    { nombre:"Platano", calorias:80},
    { nombre:"Sandía", calorias:16},
    { nombre:"Zapote", calorias:44},
    { nombre:"Fresa", calorias:25}
]


let impFrutos=(frutos)=>
{
	let grupoFrutas=frutos.map(frutoss=>frutoss.nombre);
 document.querySelector("#frutas").textContent= grupoFrutas.join(" / ");
 }

 let botonAccion=()=>
 {
    document.querySelector("#grupo").addEventListener("click",()=>{
        if(document.querySelector("#altas").checked)
        {
            mostrarCalorias(frutos,"altas");
        }

        if(document.querySelector("#bajas").checked)
        {
            mostrarCalorias(frutos,"bajas");
        }
    })

 }

 let mostrarCalorias=(frutos, tipo)=>
 {
    let lista;
    switch (tipo)
    {
        case "altas":
            lista=frutos.filter(f=>f.calorias>50);
            break;
        case "bajas":
            lista=frutos.filter(f=>f.calorias<=50);

    }
    const datos = lista.map(fruta=>`${fruta.nombre} = ${fruta.calorias}`)
    document.querySelector("#resultado").textContent=datos;
 }


impFrutos(frutos);
botonAccion();

