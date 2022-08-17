function renderProductosCarrito(){
    let productos = obtenerProductosCarrito();
    let contenido = `<p class="alert alert-secondary carritoempty text-center" role="alert">Tu carrito está vacío.</p>
    <a class="buttoncarritoempty" href="indumentaria.html"><button type="button" class="btn btn-dark">Volver a la tienda</button></a>`;

    if (productos.length > 0 ){
        contenido = `
        <table class="table table-borderless tc1">
        <tr>
            <th class="tr1" scope="col"></th>
            <th class="tr1" scope="col" >Producto</th>
            <th class="tr1" scope="col">Precio</th>
            <th class="tr1" id="f2" scope="col">Cantidad</th>
        </tr>`;
        let total = 0;

        for (let producto of productos){
            let precio = producto.precio * producto.cantidad;
            contenido += `
            <tr class="tr2">
            <td class="text-end tdimg"><img src="../media/${producto.imagen}" width="102"></img></td>
            <td class="tdprod">${producto.nombre}</td>
            <td class="tdprice">$${precio}</td>
            <td class="text-success tdmas"><a title="Agregar producto" href="#" class="botonmas amas" onclick="agregarCarrito(${producto.id});  alertaAgregoProducto();">+</a> ${producto.cantidad} <a title="Eliminar producto" href="#" class="botonmenos amenos" onclick="eliminarCarrito(${producto.id}); alertaEliminoProducto(); ">-</a></td>
            <td class="tdvaciar"><a href=# class="btn btn-light" onclick="eliminarCarrito(${producto.id})"><img src="../media/trash.png" style="width:25px"></a></td>
            </tr>`;
            total += precio;
        }

        contenido += `</table> 
        <div class="containertotal"><a style="margin-top:40px;" href="#" class="btn btn-light text-black" onclick="vaciarCarrito(); vaciarCarritoAlert();" title="Vaciar">Vaciar carrito<img src="../media/trash.png" style="width:25px; margin-left: 10px;"></a></div>
        <div class="containertotalcomprar"> 
        <a id="compra" style="margin-top:40px; margin-bottom:70px;" href="indumentaria.html" class="btn btn-success text-white" title="Seguir comprando">Seguir comprando<img src="../media/shopping-cart-svgrepo-com.svg" style="width:25px; margin-left: 10px;"></a>
        </div>
        <div class="containerfinal">
            <h4 class="h4total">Total del carrito</h4>
            <table class="table tablacarrito">
                <tr>
                    <td>Subtotal</td>
                    <td>$ ${total} </td>
                </tr>
                <tr>
                    <td>Envio (Gratuito)</td>
                    <td><input type="radio"> Envio a domicilio / Retiro en sucursal</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>$ ${total} </td>
                </tr>  
            </table>
            <a href="finalizar.html" class="boton4" onclick="vaciarCarrito();">Finalizar compra</a>
        </div>`;
    }
    
    document.getElementById("carrito_table").innerHTML = contenido;
}

actualizarBotonCarrito()
renderProductosCarrito();

function alertaEliminoProducto() {
    Toastify({
        text: `Su producto se elimino con exito del carrito.`,
        gravity: "top",
        position: "right",
        duration: 3000,
        backgroundColor: "red",
    }).showToast();
}

function alertaAgregoProducto() {
    Toastify({
        text: `Su producto se agrego con exito.`,
        gravity: "top",
        position: "right",
        duration: 3000,
        backgroundColor: "green",
    }).showToast();
}

function vaciarCarritoAlert(){
    Swal.fire({
        position: 'top-mid',
        icon: 'success',
        title: 'Carrito vaciado con exito.',
        showConfirmButton: false,
        timer: 2000,
      })
}


function renderFooter4(){
    let contenido = `<footer class="footer">
    <div class="div-contacto2">
      <h4 class="">Contacto</h4>
      <p>Oficina 201, Buenos Aires, Argentina</p>
      <p>011 998-899</p>
      <p>beastinexistent@gmail.com</p>
      <p>Coming soon Mexico, Panama.</p>
      <a href="">Nosotros</a>
    </div>
    <div class="div-beast2">
      <h4 class="">¿Por qué <span>Beast?</span></h4>
      <p>Variedad de productos exclusivos</p>
      <p>Envios a todo el pais</p>
      <p>Sitio seguro</p>
      <p>Garantia de calidad</p>
    </div>
    <div class="div-redes2">
      <h4 class="">Redes</h4>
      <p>-Instragram-</p>
      <p>-Twitter-</p>
      <p>-Facebook-</p>
    </div>
    <div class="button-shop">
      <a href="#">Shop Now</a>
    </div>
    <div class="dand">
      <p>Designed and developed by Lean - 2022</p>
    </div>
  </footer>
    
    `;

    document.getElementById("container-footer4").innerHTML = contenido;
}

renderFooter4();



