
function testValidateNumberOfFamilyMembers (){
    console.assert(
        validateNumberOfFamilyMembers ("0") === "Este campo no puede estar vacío",
        "validateNumberOfFamilyMemebers no validó que haya un número válido de familiares."
    )
}

testValidateNumberOfFamilyMembers();
