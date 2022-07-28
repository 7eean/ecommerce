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
    let producto = searchProducto(id);
    let productos_carrito = obtenerProductosCarrito();
    producto.cantidad = 1;
    productos_carrito.push(producto);
    console.log(producto)
    guardarProductosCarrito(productos_carrito);
    actualizarBotonCarrito();
}
