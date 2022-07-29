function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<table class="table table-borderless">
    <tr>
            <th scope="col"></th>
            <th scope="col" >Producto</th>
            <th scope="col">Precio</th>
            <th id="f2" scope="col">Cantidad</th>
            <th scope="col">Subtotal</th>
        </tr>`;

    for (let producto of productos){
        contenido += `
        <tr>
            <td class="text-end"><img src="../media/${producto.imagen}" width="102"></img></td>
            <td>${producto.nombre}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.precio}</td>
            <td>$${producto.precio}</td>
            <td><a href=# class="btn btn-light"><img src="../media/trash.png" style="width:25px"></a></td>
        </tr>`;
    }

    contenido += `</table>
    <div class="final-compra">  
        <table class="table">
        <thead>
        <tr><th scope="col">Finalizar compra</th></tr>
        </thead>
        <tr>
            <td><b>Subtotal</b></td>
            <td>Otto</td>
            <td></td>
        </tr>
        <tr>
            <td><b>Envio</b></td>
            <td>Gratis</td>
            <td>Retiro en tienda</td>
        </tr>
        </table>
        <div>
            <a href=# class="btn btn-dark">Finalizar compra</a>
        </div>
    </div>`;
    document.getElementById("carrito_table").innerHTML = contenido;
}

renderProductosCarrito();


