document.querySelector("#add-family-members").onclick = () => {
    validateNumberOfFamilyMembers();
    addFamilyMembers();
    hideButton();
    document.querySelector("#calculate-button").className = ""
    document.querySelector("#reset-button").className = ""
}

function addFamilyMembers(numberOfFamilyMembers) {
    numberOfFamilyMembers = Number(document.querySelector("#number-of-family-members").value);
    for (i = 0; i < numberOfFamilyMembers; i++) {
        let $divNode = document.createElement("div");
        $divNode.className = "member"

        const $newLabel = document.createElement("label");
        $newLabel.textContent = "Ingrese la edad del familiar:";

        const $newInput = document.createElement("input");
        $newInput.name = "age-of-family-member";
        $newInput.type = "number";

        $newLabel.appendChild($newInput);
        $divNode.appendChild($newLabel);
        document.querySelector("#family-members").appendChild($divNode)
    }
}

function hideButton(numberOfFamilyMembers) {
    numberOfFamilyMembers = Number(document.querySelector("#number-of-family-members").value);
    const button = document.querySelector("#add-family-members");
    if (numberOfFamilyMembers > 0) {
        button.className = "oculto";
    }
}

const $calculateButton = document.querySelector("#calculate-button")
$calculateButton.onclick = () => {
    createNumbers();
    obtainOldestMember();
    obtainYoungestMember();
    obtainAverageFamilyAge();
    $calculateButton.className = "oculto"
    document.querySelector("#paragraph").className = ""
    return false;
}

let numbers = [];
function createNumbers($ageOfFamilyMembers) {
    $ageOfFamilyMembers = document.querySelectorAll("input[name=age-of-family-member");
    for (i = 0; i < $ageOfFamilyMembers.length; i++) {
        numbers.push(parseInt($ageOfFamilyMembers[i].value));
    }
}

function obtainOldestMember(oldestMember) {
    oldestMember = numbers[0]
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > oldestMember) {
            oldestMember = numbers[i];
        }
    }
    document.querySelector("#age-oldest-family-member").textContent = oldestMember + " años.";
}

function obtainYoungestMember(youngestMember) {
    youngestMember = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < youngestMember) {
            youngestMember = numbers[i];
        }
    }
    document.querySelector("#age-youngest-family-member").textContent = youngestMember + " años.";
}

function obtainAverageFamilyAge(total) {
    total = 0;
    for (i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    total = total / numbers.length;
    document.querySelector("#average-family-age").textContent = total + " años.";
}

const $resetButton = document.querySelector("#reset-button")

$resetButton.onclick = () => {
    showAddButton();
    removeFamilyMemebers();
    resetCalculousValues();
    hideParagraph();
    clearAddInput();
    document.querySelector("#number-of-family-members").className = ""
    document.querySelector("#reset-button").className = "oculto"
    document.querySelector("#calculate-button").className = "oculto"
}

function showAddButton() {
    document.querySelector("#add-family-members").className = ""
}

function removeFamilyMemebers() {
    let $divNode = document.querySelectorAll(".member");
    for (i = 0; i < $divNode.length; i++) {
        $divNode[i].remove();
    }
}

function resetCalculousValues() {
    numbers = []
}

function hideParagraph() {
    document.querySelector("#age-oldest-family-member").textContent = "";
    document.querySelector("#age-youngest-family-member").textContent = "";
    document.querySelector("#average-family-age").textContent = "";
    document.querySelector("#paragraph").className = "oculto"
}

function clearAddInput() {
    document.querySelector("#number-of-family-members").value = "";
}



function validateNumberOfFamilyMembers(numberOfFamilyMembers) {
    numberOfFamilyMembers = numberOfFamilyMembers = Number(document.querySelector("#number-of-family-members").value)
    if (numberOfFamilyMembers <= 0) {
        document.querySelector("#number-of-family-members").className = "error"
        return "Este campo no puede estar vacío"
    } document.querySelector("#number-of-family-members").className = ""
}


