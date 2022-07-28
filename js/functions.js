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
