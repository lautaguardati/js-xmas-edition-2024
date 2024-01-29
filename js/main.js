const $form = document.querySelector("#carta-a-santa");
const $nombre = document.formulario.nombre.value;
const $ciudad = document.formulario.ciudad.value;
const $descripcionRegalo = document.formulario["descripcion-regalo"].value


function validarNombre($nombre) {
    if ($nombre.length == 0) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if ($nombre.length >= 50) {
        return "Este campo debe tener menos de 50 caracteres";
    }
    return ""
}

function validarCiudad($ciudad) {
    if ($ciudad == "") {
        return "Debe seleccionar la ciudad donde vive"
    }
    return ""
}

function validarDescripcionRegalo($descripcionRegalo) {
    if ($descripcionRegalo == "") {
        return "Debe escribir lo que quiere recibir."
    }
    return ""
}
