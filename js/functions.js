function obtenerIndumentariaLS() {
    return JSON.parse(localStorage.getItem("indumentaria")) || [];
};

function guardarIndumentariaLS(indumentaria) {
    localStorage.setItem("indumentaria", JSON.stringify(indumentaria));
};

function obtenerProductosLS() {
    return JSON.parse(localStorage.getItem("productos")) || [];
};

function guardarProductosLS(productos) {
    localStorage.setItem("productos", JSON.stringify(productos));
};

function obtenerProductosCarrito() {
    return JSON.parse(localStorage.getItem("carrito")) || [];
};

function guardarProductosCarrito(productos) {
    localStorage.setItem("carrito", JSON.stringify(productos));
};

function searchProducto(id){
    let productos = obtenerProductosLS();
    return productos.find(x => x.id == id);
}

function agregarCarrito(id){
    let productos_carrito = agregarItem(id);

    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
}

function agregarCarritoIndumentaria(id) {
    let productos_carrito = agregarItem(id);

    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
}

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    actualizarBotonCarrito();
    renderProductosCarrito();
}

function eliminarCarrito(id){
    let productos_carrito = eliminarItem(id);

    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
    renderProductosCarrito();
}

function agregarItem(id) {
    let productos_carrito = obtenerProductosCarrito();
    let pos = productos_carrito.findIndex(x => x.id == id);

    if (pos > -1) {
        productos_carrito[pos].cantidad += 1; 
    } else {
        let producto = searchProducto(id);
        producto.cantidad = 1;
        productos_carrito.push(producto);
        console.log(producto);
    }

    return productos_carrito;
}

function eliminarItem(id) {
    let productos_carrito = obtenerProductosCarrito();
    let producto = searchProducto(id);
    let pos = productos_carrito.findIndex(x => x.id == id);
    productos_carrito[pos].cantidad -= 1;
    
    if(productos_carrito[pos].cantidad == 0) {
        productos_carrito.splice(pos, 1);
    }  

    return productos_carrito;
}


