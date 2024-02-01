document.querySelector("#add-family-members").onclick = () => {
    addFamilyMembers();
    hideButton();
    addButton();
    createCleanerButton();
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
        document.querySelector("form").appendChild($divNode)
    }
}

function hideButton(numberOfFamilyMembers) {
    numberOfFamilyMembers = Number(document.querySelector("#number-of-family-members").value);
    const button = document.querySelector("#add-family-members");
    if (numberOfFamilyMembers > 0) {
        button.setAttribute("hidden", "true");
    }
}

const $calculateButton = document.createElement("button");
function addButton() {
    $calculateButton.textContent = "Calcular";
    $calculateButton.type = "submit";
    $calculateButton.id = "calculate-button"
    document.querySelector("form").appendChild($calculateButton);
}



$calculateButton.onclick = () => {
    createNumbers();
    obtainOldestMember();
    obtainYoungestMember();
    obtainAverageFamilyAge();
    $calculateButton.setAttribute("hidden", "true");
    showHiddenParagraph();
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

function showHiddenParagraph() {
    document.querySelector("p").removeAttribute("hidden");
}

const $resetButton = document.createElement("button");
function createCleanerButton() {
    $resetButton.textContent = "Reiniciar";
    $resetButton.type = "button";
    document.querySelector("form").appendChild($resetButton);
}

$resetButton.onclick = () => {
    showAddButton();
    removeFamilyMemebers();
    resetCalculousValues();
    hideParagraph();
    showCalculateButton();
    clearAddInput();
    document.querySelector("#number-of-family-members").className = ""
}

function showAddButton() {
    document.querySelector("#add-family-members").removeAttribute("hidden");
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
    document.querySelector("p").setAttribute("hidden", "true")
}

function showCalculateButton() {
    document.querySelector("#calculate-button").removeAttribute("hidden");
}

function clearAddInput() {
    document.querySelector("#number-of-family-members").value = "";
}
