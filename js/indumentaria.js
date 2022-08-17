function renderProductos() {
    let productos = obtenerProductosLS();
    let contenido = "";
    
    for (let producto of productos) {
        if (producto.categoria == 1) {
            contenido += `<div class="col-md-4">
        <div class="card border-0 fondo">
        <img src="../media/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body">
            <h5 class="card-title text-center">${producto.nombre}</h5>
            <p class="card-text text-center" style="color: #b3b2b1">${producto.descripcion}</p>
            <p class="card-text text-center">$${producto.precio}</p>
            <p class="card-text text-center"><a href="#" class="btn btn-danger" <element onclick="agregarCarritoIndumentaria(${producto.id}); alertaAgregoIndumentaria();">Agregar al carrito</a></p> 
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

function alertaAgregoIndumentaria() {
    Toastify({
        text: `Su producto se agrego con exito al carrito.`,
        gravity: "bottom",
        position: "right",
        duration: 3000,
        backgroundColor: "green",
    }).showToast();
}

function renderFooter2(){
    let contenido = `   <footer class="footer">
    <div class="div-contacto">
      <h4 class="">Contacto</h4>
      <p>Oficina 201, Buenos Aires, Argentina</p>
      <p>011 998-899</p>
      <p>beastinexistent@gmail.com</p>
      <p>Coming soon Mexico, Panama.</p>
      <a href="">Nosotros</a>
    </div>
    <div class="div-beast">
      <h4 class="">¿Por qué <span>Beast?</span></h4>
      <p>Variedad de productos exclusivos</p>
      <p>Envios a todo el pais</p>
      <p>Sitio seguro</p>
      <p>Garantia de calidad</p>
    </div>
    <div class="div-redes">
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

    document.getElementById("container-footer2").innerHTML = contenido;
}

renderFooter2();


