document.querySelector("#add-familiar").onclick = function () {
    addMember();
}

function addMember() {
    const $divNode = document.createElement("div");
    $divNode.className = "member";

    const $newLabel = document.createElement("label");
    $newLabel.textContent = "Ingrese salario del familiar:";

    const $newInput = document.createElement("input");
    $newInput.type = "number";
    $newInput.className = "salary"
    $newInput.name = "salary"

    document.querySelector("form").appendChild($divNode);
    $divNode.appendChild($newLabel);
    $newLabel.appendChild($newInput);
}

document.querySelector("#remove-familiar").onclick = function () {
    removeMember();
}

function removeMember() {
    document.querySelector(".member").remove();
}

document.querySelector("#calculate-button").onclick = function () {
    createNumbers();
    findHighestSalary();
    findLowestSalary();
    findAverageAnnualSalary();
    findAverageMensualSalary();
    showResults();
    return false;
}

let numbers = []
function createNumbers($salarys) {
    let newnumbers = []
    $salarys = document.querySelectorAll("input[name=salary");
    for (i = 0; i < $salarys.length; i++) {
        newnumbers.push(parseInt($salarys[i].value));
    }
    numbers = newnumbers.filter((newnumbers) => newnumbers > null || "" || NaN)
}

function findHighestSalary(highestSalary) {
    highestSalary = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] > highestSalary) {
            highestSalary = numbers[i];
        }
    }
    document.querySelector("#highest-annual-salary").textContent = highestSalary + "$"
}

function findLowestSalary(lowestSalary) {
    lowestSalary = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowestSalary) {
            lowestSalary = numbers[i];
        }
    }
    document.querySelector("#lowest-annual-salary").textContent = lowestSalary + "$";
}

function findAverageAnnualSalary(total, annualAverage) {
    total = 0;
    for (i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    annualAverage = total / numbers.length;
    document.querySelector("#average-annual-salary").textContent = annualAverage + "$";
}

function findAverageMensualSalary(total, monthsInAYear, mensualAverage) {
    total = 0;
    for (i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }
    monthsInAYear = 12;
    mensualAverage = (total / numbers.length) / monthsInAYear;
    document.querySelector("#average-mensual-salary").textContent = mensualAverage + "$";
}

function showResults(){
    document.querySelector("p").removeAttribute("hidden")
}
