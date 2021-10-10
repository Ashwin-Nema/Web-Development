var position = document.getElementById('position')
var out = document.getElementById("out")
var google = document.getElementById("google")
var map = document.getElementById("map")
function receive(site) {


    var latitude = site.coords.latitude
    var longitude = site.coords.longitude

    console.log(latitude)
    display(latitude, longitude)
}

var final = document.getElementById("final")

function display(latitude, longitude) {
    var place = `Latitude is ${latitude}°, longtitude is ${longitude}°.`

    var view = document.createElement("input")
    view.setAttribute("value", "View On Google Map")
    view.setAttribute('type', 'submit');
    var div = document.createElement('div');
    div.innerHTML = place
    out.appendChild(div)
    out.appendChild(view)
    google.appendChild(view)
    view.setAttribute("id", "map");
    document.getElementById("map").style.backgroundColor = "#0275d8";
    document.getElementById("map").style.color = "white";
    document.getElementById("map").style.border = "none";
    view.onclick = function() {
        var link = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
        window.location = link
    }
}

function deny() {
    out.innerHTML = "You need to give location permission for going further. Please refresh the page to try again"
}


function point() {
    navigator.geolocation.getCurrentPosition(receive, deny)
}

position.addEventListener("click", function(e){
    e.preventDefault()
    point()
} )