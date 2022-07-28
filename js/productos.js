const productos = [
    {id:1, nombre:"adidas Yeezy Boost 350 Semi Frozen Yellow", descripcion:"SIZE 9W / DS", imagen:"aidas-yeezy-350.png", precio:142.781},
    {id:2, nombre:"Jordan 1 Low Black Guava Ice ", descripcion:"SIZE 9.5W / DS", imagen:"Air-Jordan-1-Low-Black-Guava.png", precio:117.185},
    {id:3, nombre:"Jordan 1 High OG Newstalgia Chenille W", descripcion:"SIZE 10W / DS", imagen:"Jordan-1-High-OG.png", precio:115.197},
    {id:4, nombre:"Jordan 1 Low Mocha", descripcion:"SIZE 10.5W / DS", imagen:"Jordan-1-Low-Mocha.png", precio:65.071},
    {id:5, nombre:"Jordan 1 Mid Armory Navy", descripcion:"SIZE 9.5W / DS", imagen:"Jordan-1-Mid-Armory.png", precio:85.521},
    {id:6, nombre:"Jordan 4 Retro Off-White Sail (W)", descripcion:"SIZE 8W / DS", imagen:"Jordan-4-Retro-Off-White.png", precio:713.551},
    {id:7, nombre:"adidas Yeezy Boost 350 Dazzling Blue", descripcion:"SIZE 8.5W / DS", imagen:"adidas-Yeezy-Black-BLue.png", precio:125.671},
    {id:8, nombre:"adidas Crazy 1 Lakers", descripcion:"SIZE 8.5 / DS CAJA DE REMPLAZO", imagen:"adidas-Crazy-1-Lakers.png", precio:147.051},
    {id:9, nombre:"Nike Dunk Low SE Toasty Rift Blue GS", descripcion:"SIZE 9.5W / DS", imagen:"Nike-Dunk-Low-SE.png", precio:53.121},
    {id:10, nombre:"Jordan 4 Retro Lightning (2021)", descripcion:"SIZE 10.5W / DS", imagen:"Jordan-4-Retro.png", precio:93.503},
    {id:11, nombre:"adidas Yeezy 450 Dark Slate", descripcion:"SIZE 8W / DS", imagen:"adidas-Yeezy-Dark-Slate.png", precio:83.551},
    {id:12, nombre:"Converse Chuck Taylor All Star", descripcion:"SIZE 9.5 / DS", imagen:"Converse-Chuck-Taylor-All-Star.png", precio:54.801},
];

function renderProductos() {
    let productos = obtenerProductosLS();
    let contenido = "";
    
    for (let producto of productos) {
        contenido += `<div class="col-md-4">
        <div class="card border-0 fondo">
        <img src="../media/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center" style="color: #b3b2b1">${producto.descripcion}</p>
            <p class="card-text text-center">$${producto.precio}</p>
            <p class="card-text text-center"><a href="#" class="btn btn-danger">Agregar al carrito</a></p> 
        </div>
        </div>
        </div>`
    }

    document.getElementById("productos").innerHTML = contenido;
};

guardarProductosLS(productos);
renderProductos(productos);



