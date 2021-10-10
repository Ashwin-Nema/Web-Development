const x_class = "x"
const circle_class = "circle"
const cellelements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
let circle
const win_combination = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
const winmessage = document.querySelector('[data-result]')
const winmessageelement = document.getElementById('message')
const restart = document.getElementById("restart")
start()
restart.addEventListener('click', start)
function start() {
    circle = false
    cellelements.forEach(cell => {
        cell.classList.remove(x_class)
        cell.classList.remove(circle_class)
        cell.addEventListener('click', handleClick, { once: true})
    })
    hover()
    winmessageelement.classList.remove("show")
}

function handleClick(e) {
    const cell = e.target
    const current = circle ? circle_class : x_class
    place(cell, current)
    if (checkwin(current)) {
        endgame(false)

    } else if (isDraw()) {
        endgame(true)
    }else {
        swap()
        hover()
    }

}

function endgame(draw) {
    if (draw) {
        winmessage.innerHTML = "It is a tie!"

    } else {
        winmessage.innerHTML = `${circle ? "Player 2" : "Player 1"} Wins!`
        console.log("hello")
    }
    winmessageelement.classList.add("show")
}

function isDraw() {
    return [...cellelements].every(cell => {
        return cell.classList.contains(x_class) || cell.classList.contains(circle_class)
    })
}
function place(cell, current) {
    cell.classList.add(current)
}

function swap() {
    circle = !circle
}

function hover() {
    board.classList.remove(x_class)
    board.classList.remove(circle_class)

    if (circle) {
        board.classList.add(circle_class)
    } else {
        board.classList.add(x_class)
    }
}

function checkwin(current) {
    return win_combination.some(combination => {
        return combination.every(index => {
            return cellelements[index].classList.contains(current)
        } )
    })
}