Userinput = document.getElementById("Userinput")
document.getElementById("Submit").addEventListener("click", display)
answer = document.getElementById('answer')
deletedstring = document.getElementById('deletedstring')

function display() {
    value = Userinput.value
    switch (value) {
        case "":
            answer.innerHTML = "Please provide some input"
            deletedstring.innerHTML = ""
            break
        
        default:
            result = ""
            remove = ""
            answer.innerHTML = ""
            deletedstring.innerHTML = ""

            for (i = 0; i < value.length; i++) {
                if (value.charAt(i) != "#") {
                    result += value.charAt(i)
                }

                else{
                    if (result.length > 0) {
                        remove += result.charAt(result.length - 1)
                    }
                    result = result.slice(0, result.length - 1)
                }
            }
            let modified = `correct processed string - ${result}`
            let deleted = `deleted string - ${remove}`
            Userinput.value = ""
            answer.innerHTML = modified
            deletedstring.innerHTML = deleted


    }
}