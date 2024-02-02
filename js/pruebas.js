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

    console.assert(
        validarNombre("Alpha125") === "El campo nombre solo acepta letras",
        "Validar nombre no validó que el nombre solo tenga letras."
    )

    console.assert(
        validarNombre("Lautaro") === "",
        "Validar nombre no validó que el nombre colocado era válido"
    )
}

probarValidarNombre();



function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Debe seleccionar la ciudad donde vive",
        "Validar ciudad no validó que el campo de 'ciudad' no está vacío."
    )
    console.assert(
        validarCiudad("Santa Fe") === "",
        "Validar ciudad no funcionó con un nombre de ciudad válido."
    )
}

probarValidarCiudad()



function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "El campo de descripción no puede estar vacío",
        "Validar la descripción del regalo no validó que el campo de los regalos no esté vacío."
    )
    console.assert(
        validarDescripcionRegalo("iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii") ===
        "El campo de descripción no puede tener más de 100 caracteres",
        "Validar descripción del regalo no validó que el campo tenga menos de 100 caracteres"
    )
    console.assert(
        validarDescripcionRegalo("`+`+p`´ñ`12312") === "El campo de descripción solo puede tener números y letras",
        "Validar descripción regalo no validó que la descripción sea solo números y letras"
    )

    console.assert(
        validarDescripcionRegalo("Quiero una play") === "",
        "Validar la descripción del regalo no validó una descripción válida"
    )
}

probarValidarDescripcionRegalo();
