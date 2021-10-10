var number = document.getElementById('number')
var push = document.getElementById('push')
var pop = document.getElementById('pop')

var invalid = document.getElementById("invalid")
var output = document.getElementById("output")
var disappear = 0
var count = 0

push.addEventListener('click', function() {
    var input = number.value
    switch (input) {
        case "":
            invalid.innerHTML = "Please enter something in the input field"
            disappear += 1
            break;
        
        default:
            var check = parseInt(input) == input

            switch (check) {
                case true:
                    if (disappear) {
                        disappear = 0
                        invalid.innerHTML = ""

                    }
                    switch (count) {
                        case 0:
                            count += 1
                            var element = document.createElement('span')
                            element.innerText = input
                            output.appendChild(element)
                            number.value = ""
                            break;
                        
                        default:
                            count += 1
                            var element = document.createElement('span')
                            element.innerText = `,${input}`
                            output.appendChild(element)
                            number.value = ""

                    }
                    break;
                
                case false:
                    invalid.innerHTML = "Invalid Input"
                    disappear += 1
                    number.value = ""
                    break;
            }

    }
})

pop.addEventListener('click', function() {
    switch (count) {
        case 0:
            invalid.innerHTML = "Stack is empty"
            number.value = ""
            disappear += 1
            break;
        
        default:
            if (disappear) {
                disappear = 0
                invalid.innerHTML = ""
            }
            var select = document.getElementById('output')
            select.removeChild(select.lastChild)
            count -= 1
            number.value = ""

    }
} )