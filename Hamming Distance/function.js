const submitbtn = document.getElementById("submitbtn")
let string = document.getElementById("string")
submitbtn.addEventListener("click", display)
let answer = document.getElementById("answer")

let invalidinput = document.getElementById("invalidinput")

function countcomma(inputstring) {
    let count = 0
    for (let i = 0; i< inputstring.length; i++){
        if (inputstring.charAt(i) == ",") {
            count++
        }
    }

    return count
}

function checker(value) {
    if (value == "") {
        return false
    }

    const count = countcomma(value)

    if (count == 0 || count > 1) return false

    let stringarray = value.split(",")
    stringarray[0] = stringarray[0].trim()
    stringarray[1] = stringarray[1].trim()
    if (stringarray[0].length != stringarray[1].length) return false

    return true
}

function hammingdistance(string1, string2) {
    let count = 0
    for (let i = 0; i < string1.length; i++){
        if (string1.charAt(i) != string2.charAt(i)) {
            count++
        }
    }

    return count
}


function display() {
    invalidinput.innerHTML = ""
    answer.innerHTML = ""
    let value = string.value
    const test = checker(value)

    switch (test) {
        case false:
            invalidinput.innerHTML = "Please input two strings of equal length sepearated by a comma"
            break
        
        case true:
            let strings = value.split(",")
            strings[0] = strings[0].trim()
            strings[1] = strings[1].trim()
            answer.innerHTML = hammingdistance( strings[0],  strings[1])

    }
}