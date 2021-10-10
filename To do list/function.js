submitbutton = document.getElementById("submitbutton")
itemvalue = document.getElementById("itemvalue")
output = document.getElementById("output")
removebutton = document.getElementById("removebutton")
removebutton.addEventListener("click", clearall)


function clearall() {
    output.innerHTML = ""
    itemvalue.value = ""
}

var count = 0
function textchange(e) {
    underline = e.target.parentElement.parentElement.getElementsByTagName("div")[0]
    if (count % 2 == 0) {
        underline.style.textDecoration = "line-through"
        underline.style.color = "lightgrey"
    }else {
        underline.style.textDecoration = "none"
        underline.style.color = "black"
    }
    count++
}

function edittext(e) {
    value = itemvalue.value
    value = value.bold()
    EditText =  e.target.parentElement.parentElement.getElementsByTagName("div")[0]
    EditText.innerHTML = value
    itemvalue.value = ""
    itemvalue.value = ""

}

function removeelement(e) {
    e.target.parentElement.parentElement.remove()
}

function AddItem() {
    value = itemvalue.value
    value = value.bold()
    var item = document.createElement('div')
    item.classList.add('addeditem')

    var text = document.createElement("div")
    text.innerHTML = value
    item.appendChild(text)

    var circle = document.createElement("img")
    circle.src = "check-circle.svg"
    circle.style.width = "30px"
    circle.style.height = "30px"
    circle.style.marginRight = "10px"
    circle.addEventListener("click", textchange)

    var tick = document.createElement("img")
    tick.src = "x-circle.svg"
    tick.style.width = "30px"
    tick.style.height = "30px"
    tick.style.marginRight = "10px"
    tick.addEventListener("click", removeelement)

    var edit = document.createElement("img")
    edit.src = "edit icon.png"
    edit.style.width = "30px"
    edit.style.height = "30px"
    edit.style.marginRight = "10px"
    edit.addEventListener("click", edittext)

    var text2 = document.createElement("div")
    text2.appendChild(circle)
    text2.appendChild(edit)
    text2.appendChild(tick)
    item.appendChild(text2)


    output.appendChild(item)
    document.getElementById("itemvalue").value = ""

}



submitbutton.addEventListener("click", AddItem)