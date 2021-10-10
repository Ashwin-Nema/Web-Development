let content = document.getElementById("content")
let author = document.getElementById("author")
let botton = document.getElementById("button")
button.addEventListener("click", quote)

async function quote() {
    try {
      const response = await fetch("https://type.fit/api/quotes")
      const data = await response.json()
      let randomquotenumber = Math.floor(Math.random() * data.length)
    
      content.innerHTML = data[randomquotenumber].text
      author.innerHTML =  data[randomquotenumber].author

    } catch (error) {
        author.innerHTML = ""
        content.innerHTML = "Sorry the page could not be loaded please check your internet connection"
    }
  
  
  }
  quote()