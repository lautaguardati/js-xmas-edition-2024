function probarValidarNombre() {
    console.assert(
        validarNombre("") === 'Este campo debe tener al menos 1 caracter',
        'Validar nombre no validó que el nombre no sea vacío'
    );

    console.assert(
        validarNombre(
            '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
    );
}

probarValidarNombre();



function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar la ciudad donde vive",
        "Validar ciudad no validó que el campo de 'ciudad' no está vacío."
    )
}

probarValidarCiudad()



function probarValidarDescripcionRegalo (){
    console.assert(
        validarDescripcionRegalo("") === "Debe escribir lo que quiere recibir.",
        "Validar la descripción del regalo no validó que el campo de los regalos no esté vacío."
    )
}


probarValidarDescripcionRegalo();
