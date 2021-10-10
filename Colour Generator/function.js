var App = function() {
    var button = document.getElementById("button")
    var first = document.getElementById("first")
    var second = document.getElementById("second")
    var third = document.getElementById("third")
    var fourth = document.getElementById("fourth")
    var fifth = document.getElementById("fifth")



    function display() {
        var color1 = Math.floor(Math.random()*16777215).toString(16)
        var color2 = Math.floor(Math.random()*16777215).toString(16);
        var color3 = Math.floor(Math.random()*16777215).toString(16);
        var color4 = Math.floor(Math.random()*16777215).toString(16);
        var color5 = Math.floor(Math.random()*16777215).toString(16);

        first.style.backgroundColor = "#" + color1
        first.innerText = "#" + color1

        second.style.backgroundColor = "#" + color2
        second.innerText = "#" + color2

        third.style.backgroundColor = "#" + color3
        third.innerText = "#" + color3

        fourth.style.backgroundColor = "#" + color4
        fourth.innerText = "#" + color4

        fifth.style.backgroundColor = "#" + color5
        fifth.innerText = "#" + color5
    }

    button.addEventListener("click", display)
}()




