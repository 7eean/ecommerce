const indumentaria = [
    {id:1, nombre:"Air Jordan Essentials Statement Tee", descripcion:"SIZE M / DS", imagen:"Air-Jordan.png", precio:38.521},
    {id:2, nombre:"Anti Social Social Club Kkoch Tee", descripcion:"SIZE M / S / DS", imagen:"Anti-Social-Social-Club-Tee.png", precio:36.905},
    {id:3, nombre:"Camo C By Bathing Ape Tee Green", descripcion:"SIZE M / S / XS / DS", imagen:"Bathing-Ape.png", precio:55.357},
    {id:4, nombre:"Fear of God Essentials Pullover Hoodie Applique ", descripcion:"SIZE M / DS", imagen:"Essentials-Fear-of-God.png", precio:92.004},
    {id:5, nombre:"Anti Social Social Club Sugar Hill Hoodie Black", descripcion:"SIZE XL / L / M / DS", imagen:"Anti-Social-Social-Club.png", precio:62.521},
    {id:6, nombre:"Gucci x The North Face Print Jacket Beige/Ebony", descripcion:"SIZE M / S / DS", imagen:"Gucci-x-The-North-Face.png", precio:4 + "," + 550.553},
    {id:7, nombre:"Nike Big Swoosh Tracket", descripcion:"SIZE M / S / DS", imagen:"Nike-Big-Swoosh.png", precio:29.035},
    {id:8, nombre:"Nike NSW Sport Swoosh Sweatpants", descripcion:"SIZE M / S / DS", imagen:"Nike-NSW-Sport-Swoosh.png", precio:69.042},
    {id:9, nombre:"Nike Swoosh Obsidian Sweatpants", descripcion:"SIZE M / L / DS", imagen:"Nike-Swoosh-Obsidian.png", precio:46.608},
    {id:10, nombre:"Mitchell Ness Lakers Pants", descripcion:"SIZE M DS", imagen:"Mithchell-Ness-Lakers.png", precio:48.503},
    {id:11, nombre:"Mitchell Ness Los Angeles Lakers Premium", descripcion:"SIZE XL / L DS", imagen:"Mitchell-Ness-Los-Angeles-Lakers.png", precio:35.504},
    {id:12, nombre:"Fear of God Essential Sweatshort", descripcion:"SIZE M / L / S / XS DS", imagen:"Fear-of-God-Essentials-Sweatshort.png", precio:68.453},
];

function renderIndumentaria() {
    let indumentarias = obtenerIndumentariaLS();
    let contenido2 = "";
    
    for (let indumentaria of indumentarias) {
        contenido2 += `<div class="col-md-4">
        <div class="card border-0 fondo">
        <img src="../media/${indumentaria.imagen}" class="card-img-top" alt="${indumentaria.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${indumentaria.nombre}</h5>
            <P class="card-text text-center" style="color: #b3b2b1">${indumentaria.descripcion}</p>
            <p class="card-text text-center">$${indumentaria.precio}</p>
            <p class="card-text text-center"><a href="#" class="btn btn-danger">Agregar al carrito</a></p> 
        </div>
        </div>
        </div>`
    }

    document.getElementById("indumentaria").innerHTML = contenido2;
}

guardarIndumentariaLS(indumentaria);
renderIndumentaria();


