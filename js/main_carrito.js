function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="alert alert-secondary carritoempty text-center" role="alert">Tu carrito está vacío.</p>
    <a class="buttoncarritoempty" href="indumentaria.html"><button type="button" class="btn btn-dark">Volver a la tienda</button></a>`;

    if (productos.length > 0 ){
        contenido = `
        <table class="table table-borderless">
        <tr>
            <th scope="col"></th>
            <th scope="col" >Producto</th>
            <th scope="col">Precio</th>
            <th id="f2" scope="col">Cantidad</th>
        </tr>`;
        let total = 0;

        for (let producto of productos){
            let precio = producto.precio * producto.cantidad;
            contenido += `
            <tr>
            <td class="text-end"><img src="../media/${producto.imagen}" width="102"></img></td>
            <td>${producto.nombre}</td>
            <td>$${precio}</td>
            <td class="text-success"><a title="Agregar producto" href="#" class="botonmas" onclick="agregarCarrito(${producto.id})" >+</a> ${producto.cantidad} <a title="Eliminar producto" href="#" class="botonmenos" onclick="eliminarCarrito(${producto.id})">-</a></td>
            <td><a href=# class="btn btn-light" onclick="eliminarCarrito(${producto.id})"><img src="../media/trash.png" style="width:25px"></a></td>
            </tr>`;
            total += precio;
        }

        contenido += `</table>
        <p class="text-end" style="margin-right: 85px; margin-bottom:100px;"><a style="text-decoration: none;" href="#" class="bt btn-light text-black" onclick="vaciarCarrito()" title="Vaciar">Vaciar carrito<img src="../media/trash.png" style="width:25px; margin-left: 10px;"></a></p>
        <div class="final-compra">  
        <table class="table">
        <thead>
        <tr><th scope="col">Finalizar compra</th></tr>
        </thead>
        <tr>
            <td><b>Subtotal</b></td>
            <td>$ ${total}</td>
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
    }
    
    document.getElementById("carrito_table").innerHTML = contenido;
}

actualizarBotonCarrito()
renderProductosCarrito();


