let column = document.querySelectorAll(".col")
let circle = document.getElementById("circle")

column[0].style.fontWeight = "bold"
column[1].style.fontWeight = "bold"

function search(){
    circle.classList.remove("hidden")
    let userinput = document.getElementById("userinput").value

    switch(userinput) {
        case "":
            for (let i = 1; i < column.length; i += 2) {
                column[i].parentElement.style.display = ""
            }
            break
        default:
            userinput = userinput.trim()
            userinput = userinput.toUpperCase()
            for (let i = 0; i < column.length; i += 2) {
                let one = column[i].innerText.toUpperCase()
                let two = column[i + 1].innerText.toUpperCase()
                if (one.indexOf(userinput) > -1 || two.indexOf(userinput) > -1) {
                    column[i].parentElement.style.display = ""
                }else {
                    column[i].parentElement.style.display = "none"
                }
            }

    }

}

function clearinput() {
    document.getElementById("userinput").value = ""
    for (let i = 1; i < column.length; i += 2) {
        column[i].parentElement.style.display = ""
    }
}

circle.addEventListener("click", clearinput)