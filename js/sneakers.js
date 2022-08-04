function renderProductos() {
    let productos = obtenerProductosLS();
    let contenido = "";
    
    for (let producto of productos) {
        if (producto.categoria === 2){
            contenido += `<div class="col-md-4">
        <div class="card border-0 fondo">
        <img src="../media/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center" style="color: #b3b2b1">${producto.descripcion}</p>
            <p class="card-text text-center">$${producto.precio}</p>
            <p id="agregarcarrito" class="card-text text-center"><a href="#" class="btn btn-danger" onclick="agregarCarrito(${producto.id}); alertaAgregoSneakers();">Agregar al carrito</a></p> 
        </div>
        </div>
        </div>`
        }
    }

    document.getElementById("productos").innerHTML = contenido;
};

guardarProductosLS(productos);
renderProductos(productos);
actualizarBotonCarrito();

function alertaAgregoSneakers() {
    Toastify({
        text: `Su producto se agrego con exito al carrito.`,
        gravity: "bottom",
        position: "right",
        duration: 3000,
        backgroundColor: "green",
    }).showToast();
}
