const $form = document.querySelector("#carta-a-santa");
const nombre = document.formulario.nombre.value;
const ciudad = document.formulario.ciudad.value;
const descripcionRegalo = document.formulario["descripcion-regalo"].value;

function validarNombre(nombre) {
    if (nombre.length == 0) {
        return "El campo nombre debe tener al menos 1 caracter";
    }
    if (nombre.length >= 50) {
        return "El campo nombre debe tener menos de 50 caracteres";
    }
    if (!/^[a-z]+$/i.test(nombre)) {
        return "El campo nombre solo acepta letras";
    }
    return "";
}

function validarCiudad(ciudad) {
    if (ciudad.length === 0) {
        return "Debe seleccionar la ciudad donde vive"
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo.length === 0) {
        return "El campo de descripción del regalo no puede estar vacío";
    }
    if (descripcionRegalo.length >= 100) {
        return "El campo de descripción del regalo no puede tener más de 100 caracteres";
    }
    if (!/^[A-z0-9 ]+$/.test(descripcionRegalo)) {
        return "El campo de descripción del regalo solo puede tener números y letras";
    }
    return "";
}



$form.onsubmit = validarFormulario;
function validarFormulario(event) {
    const nombre = document.formulario.nombre.value;
    const ciudad = document.formulario.ciudad.value;
    const descripcionRegalo = document.formulario["descripcion-regalo"].value

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        "descripcion-regalo": errorDescripcionRegalo,
    };

    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        $form.className = "oculto";
        document.querySelector("#exito").className = "";
        redireccionar();
    }
    event.preventDefault();
}

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    $errores.innerHTML = "";
    let cantidadErrores = 0;
    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            cantidadErrores++;
            $form[key].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);
        } else {
            $form[key].className = "";
        }
    })
    return cantidadErrores;
}

function redireccionar() {
    setTimeout(function irALaWishlist() {
        window.location.href = "wishlist.html"
    }, 5000);
}
