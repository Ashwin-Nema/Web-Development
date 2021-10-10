const button = document.getElementById('btn')
button.addEventListener("click", display)

const image = document.getElementById("image")
image.style.width = "400px"
image.style.height = "400px"
image.style.textAlign = "center"
image.classList.add("align-self-center")
image.classList.add("d-flex")
image.classList.add("align-items-center")
image.classList.add("justify-content-center")

let count = 0

async function method1() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    const data = await response.json()
    var backgroundimage = document.createElement("img")
    backgroundimage.src = data.message
    backgroundimage.style.width = "400px"
    backgroundimage.style.height = "400px"
    image.innerHTML = ""
    image.appendChild(backgroundimage)
  } catch (error) {
    image.innerHTML =  "Sorry Image cannot be displayed. Please check your internet connection"
  }


}

function method2(){
  const response = fetch("https://dog.ceo/api/breeds/image/random")

  response.then(function(background) {
    background.json().then(function(data){
      var backgroundimage = document.createElement("img")
      backgroundimage.src = data.message
      backgroundimage.style.width = "400px"
      backgroundimage.style.height = "400px"
      image.innerHTML = ""
      image.appendChild(backgroundimage)
    })
  })
  response.catch(function(){
    var errormessage =  "Sorry Image cannot be displayed. Please check your internet connection"
    image.innerHTML = errormessage
  }) 
}

function display() {
  image.innerHTML = ""
  switch (count) {
    case 0:
      method1()
      break
    
    case 1:
      method2()
  }
  count = (count + 1)%2
}