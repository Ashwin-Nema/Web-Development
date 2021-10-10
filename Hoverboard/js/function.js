let parent = document.createElement("div")
parent.classList.add("parent")
document.body.appendChild(parent)
parent.style.backgroundColor = "#161616"


function changecolor(e) {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    let color = "#" + randomColor
    e.target.style.backgroundColor =  color;
    e.target.style["boxShadow"] = `0 0 0.2vh.5vh ${color}`
}

function bringoriginalstate(e) {
    e.target.style.transition = "3s"
    e.target.style.backgroundColor = "#1d1d1d"
    e.target.style["boxShadow"] = `none`
}

for (let i = 0; i< 35; i++) {
    let main = document.createElement("div")
    for (let i = 0; i <80; i++) {
        let element = document.createElement("div")
        element.style.width = "1.3vh"
        element.style.height = "1.3vh"
        element.style.backgroundColor = "#1d1d1d"
        element.style.margin = "0.1vw"
        element.addEventListener("mouseenter", changecolor)
        element.addEventListener('mouseleave', bringoriginalstate)
        main.appendChild(element)
    }
    main.style.margin = "0px"
    main.classList.add("elements")
    parent.appendChild(main)
}
