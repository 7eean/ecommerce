function actualizarBotonCarrito() {
    let productos = obtenerProductosCarrito();
    let contenido =  `<button type="button" class="btn btn-light position-absolute top-50 end-0 translate-middle-y" style="margin-right: 3em;"><img src="../media/shopping-cart-svgrepo-com.svg" width="30"><span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark" style="height:20px;">0</span></button>`;
    let total = 0;

    if (productos.length > 0) {
        for (let producto of productos) {
            total += producto.cantidad;
        }

        contenido =  `<button type="button" class="btn btn-light position-absolute top-50 end-0 translate-middle-y" style="margin-right: 3em;"><img src="../media/shopping-cart-svgrepo-com.svg" width="30"><span class="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-dark" style="height:20px;">${total}</span></button>`;
    }

    document.getElementById("boton_carrito").innerHTML = contenido;
}


actualizarBotonCarrito();
renderProductos();