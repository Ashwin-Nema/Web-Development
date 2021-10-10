let GeneratePassword = document.getElementById("GeneratePassword")
GeneratePassword.addEventListener("click", display)
let totalcount = document.getElementById("totalcount")
let answer = document.getElementById("answer")
let Uppercase = document.getElementById("Uppercase")
let Lowerercase = document.getElementById("Lowerercase")
let numbers = document.getElementById("numbers")
let symbols = document.getElementById("symbols")
let finalanswer = document.getElementById("finalanswer")

const Uppercasecodes = arrayfromlowtohigh(65, 90)
const Lowerercasecodes = arrayfromlowtohigh(97, 122)
const numberscodes = arrayfromlowtohigh(48, 57)
const symbolscodes = arrayfromlowtohigh(33, 47).concat(arrayfromlowtohigh(58, 64)).concat(arrayfromlowtohigh(91,96)).concat(arrayfromlowtohigh(123, 126))

function defaultbehaviour() {
    totalcount.value = ""
    Lowerercase.checked = false
    Uppercase.checked = false
    symbols.checked = false
    numbers.checked = false
}

function incorrectinput() {
    finalanswer.innerText = ""
    defaultbehaviour()
    alert("Please provide a valid input")
}

function  createpassword(userinput, charcodes) {
    const passwordcharacters = []
    for (i = 0; i < userinput; i++) {
      const character = charcodes[Math.floor(Math.random() * charcodes.length)]
      passwordcharacters.push(String.fromCharCode(character))
    }
    return passwordcharacters.join("")
}


function passwordgenerator() {
    const includeUppercase = Uppercase.checked
    const includeLowerercase = Lowerercase.checked
    const includenumbers = numbers.checked
    const includesymbols = symbols.checked

    let charcodes = []
    if (includeLowerercase) charcodes = charcodes.concat(Lowerercasecodes)
    if (includeUppercase) charcodes = charcodes.concat(Uppercasecodes)
    if (includenumbers) charcodes = charcodes.concat(numberscodes)
    if (includesymbols) charcodes = charcodes.concat(symbolscodes)
    if (charcodes.length == 0) {
        incorrectinput()
    }
    else {
        let userinput = parseInt(totalcount.value)
        const password = createpassword(userinput, charcodes)
        finalanswer.innerHTML = password

        // document.getElementById("finalanswer").style.color = "white"
        defaultbehaviour()

    }
}

function display(e){
    e.preventDefault()
    let userinput = parseInt(totalcount.value)
    if (!(isNaN(userinput)) & userinput >= 1 & userinput <= 50) {
        passwordgenerator()
    } else {
        incorrectinput()
    }

}

function arrayfromlowtohigh(low, high) {
    const array = []
    for (let i = low; i <= high; i++) {
        array.push(i)
    }

    return array
}