function renderProductosFinalizacion(){
    let contenido = `<div class="containerfinal"><div class="group" style="margin-top:30px; margin-left:100px; margin-bottom:-150px;">
    <input required="" id="nombre" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Nombre</label>
    <div class="group" style="margin-top:40px;">
    <input required="" id="apellido" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Apellido</label>
    </div>
    <div class="group" style="margin-top:40px;">
    <input required="" id="email" type="email" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Email Address</label>
    </div>
    <div class="group" style="margin-top:40px;">
    <input required="" id="direccion" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Direccion</label>
    </div>
    <div class="group" style="margin-top:40px;">
    <input required="" id="altura" type="number" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Altura</label>
    </div>
    <div class="group" style="margin-top:40px;">
    <input required="" id="ciudad" type="text" class="input">
    <span class="highlight"></span>
    <span class="bar"></span>
    <label>Ciudad</label>
    <button class="button04">
    <a id="final-compra" class="button_top"> Finalizar compra
    </a>
    </button>
    </div>
    </div>
    <aside><img class="imgfinal" src="../media/FINAL01.png" alt="" style="width:75%;"></aside>
    </div>
    
    `;

    document.getElementById("finalizar_table").innerHTML = contenido;
}

renderProductosFinalizacion();

function validarFormularioExit() {
    let campo_nombre = document.getElementById("nombre").value;
    let campo_apellido = document.getElementById("apellido").value;
    let campo_email = document.getElementById("email").value;
    let campo_direccion = document.getElementById("direccion").value;
    let campo_altura = document.getElementById("altura").value;
    let campo_ciudad = document.getElementById("ciudad").value;

    if (campo_nombre.length == 0) {
        alertaCampo('"Nombre"');
        return false;
    } 

    if (campo_apellido.length == 0) {
        alertaCampo('"Apellido"');
        return false;
    } 

    if (campo_email.length == 0) {
        alertaCampo('"Email"');
        return false;
    } 

    if (campo_direccion.length == 0) {
        alertaCampo('"Direccion"');
        return false;
    } 

    if (campo_altura.length == 0) {
        alertaCampo('"Altura"');
        return false;
    } 

    if (campo_ciudad.length == 0) {
        alertaCampo('"Ciudad"');
        return false;
    } 

    compraRealizada();
    
}; 


function alertaCampo(campo) {
    Toastify({
        text: 'Falta completar el campo ' + campo,
        gravity: "top",
        position: "left",
        duration: 3000,
        backgroundColor: "red",
    }).showToast();
};

function compraRealizada() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
    swalWithBootstrapButtons.fire({
        title: 'Por favor, confirme su compra',
        text: "",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Felicidades!',
            'Su compra llegara en 48hs habiles de forma gratuita.',
            'success' 
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Oops..',
            'Su compra ha sido cancelada',
            'error'
          )
        }
    })
};

document.getElementById("final-compra").addEventListener("click", validarFormularioExit);

function renderNav5(){
  let contenido = `<div class="opener-nav">
  <p id="p1" class="animate__animated animate__fadeIn">Envios a todo el pais.<span> Pagá con el método de pago que prefieras.</span></p>
</div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="../index.html">
  <img src="../media/pngegg (1).png" class="position-absolute top-50 start-50 translate-middle d-inline-block align-text-top">
</a>
  <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
              <a class="nav-link active" style="font-size: 17px; padding-left: 1em;" aria-current="page" href="../index.html">Inicio</a>
          </li>
          <li class="nav-item dropdown" style="">
            <a class="nav-link dropdown-toggle active" style="font-size: 17px; padding-left: 1em;" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categorias
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="sneakers.html">Calzado</a></li>
              <li><a class="dropdown-item" href="indumentaria.html">Indumentaria</a></li>
            </ul>
          </li>
      </ul>
  </div>
  <div class="container">
    <a href="carrito.html" id="boton_carrito"></a>
  </div>
</nav>
  
  `;

  document.getElementById("container-nav5").innerHTML = contenido;
}

renderNav5();


