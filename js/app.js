let p1 = document.getElementById("p1");
p1.innerHTML = "Envios a todo el pais.<span> Pagá con el método de pago que prefieras.</span>";
let h4idx = document.getElementById("h4idx");
h4idx.innerHTML = `Como amantes de la cultura proveemos la sabiduría para traerles los mejores  <span>productos 100% originales.</span>`;
let h2Carousel = document.getElementById("h2Carousel");
h2Carousel.innerHTML = `TUS MARCAS FAVORITAS EN <span>BEAST.</span>`;
let h4Section2 = document.getElementById("h4Section2");
h4Section2.innerHTML = `Encontra y disfruta tus marcas favoritas y mucho mas en <span>BEAST.</span>`;
let h4s2 = document.getElementById("h4s2");
h4s2.innerHTML = `VISITA NUESTRO SHOWROOM`;
let ps2 = document.getElementById("ps2");
ps2.innerHTML = `Oficina 201, Buenos Aires, Argentina.`;
let ps3 = document.getElementById("ps3");
ps3.innerHTML = `011 998-899`;

function renderNavIndex(){
    let contenido = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="index.html">
      <img src="./media/pngegg (1).png" class="position-absolute top-50 start-50 translate-middle d-inline-block align-text-top">
    </a>
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" style="font-size: 17px; padding-left: 1em;" aria-current="page" href="index.html">Inicio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle active" style="font-size: 17px; padding-left: 1em;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="./pages/sneakers.html">Calzado</a></li>
              <li><a class="dropdown-item" href="./pages/indumentaria.html">Indumentaria</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="container" >
      <a href="#" id="boton_carrito"></a>
    </div>
</nav>
    
    `;

    document.getElementById("container-navindex").innerHTML = contenido;
}

renderNavIndex();

function renderFooterIndex(){
    let contenido = `<footer data-aos="fade-up" class="footer">
    <div class="div-contacto">
      <h4 id="h4f" class="">Contacto</h4>
      <p id="pf1">Oficina 201, Buenos Aires, Argentina</p>
      <p id="pf2">011 998-899</p>
      <p id="pf3">beastinexistent@gmail.com</p>
      <p id="pf4">Coming soon Mexico, Panama.</p>
      <a id="af" href="">Nosotros</a>
    </div>
    <div class="div-beast">
      <h4 id="h4f2" class="">¿Por qué <span>Beast?</span></h4>
      <p id="pf5">Variedad de productos exclusivos</p>
      <p id="pf6">Envios a todo el pais</p>
      <p id="pf7">Sitio seguro</p>
      <p id="pf8">Garantia de calidad</p>
    </div>
    <div class="div-redes">
      <h4 id="h4f3" class="">Redes</h4>
      <p id="pf9">-Instragram-</p>
      <p id="pf10">-Twitter-</p>
      <p id="pf11">-Facebook</p>
    </div>
    <div class="button-shop">
      <a id="af2" href="./pages/indumentaria.html">Shop Now</a>
    </div>
    <div class="dand">
      <p id="pf12">Designed and developed by Lean - 2022</p>
    </div>
  </footer>
    `;

    document.getElementById("container-footer").innerHTML = contenido;
}

renderFooterIndex();
