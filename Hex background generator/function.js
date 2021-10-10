userInput = document.getElementById("userInput")
submit = document.getElementById("submit")
body = document.getElementById("BODY")
Invalid = document.getElementById("invalid")
valid =/^#[0-9A-Fa-f]{6}$/i




function Display() {
    value = userInput.value.trim()

    switch (value) {
        case "":
            body.style.backgroundColor = "white"
            alert("Please provide something in the input field")
            break
        
        default:
            if (value.length == 7 && valid.test(value)) {
                body.style.backgroundColor = value
                userInput.innerText = ""
            }
            else {
                body.style.backgroundColor = "white"
                alert("Please provide a valid input in the input field")
                userInput.innerText = ""

            }
    }
}

submit.addEventListener("click", Display)