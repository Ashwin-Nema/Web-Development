async function quiz() {
    try{
        const response = await fetch('https://opentdb.com/api.php?amount=5&category=18&difficulty=easy&type=multiple')
        const data = await response.json()
        let question = document.getElementById("question")
        question.innerHTML = ""
        let number = 1
        let questionnumber = document.getElementById("questionnumber")
        let previous = document.getElementById("previous")
        let next = document.getElementById("next")
        let correctanswer = 0
        previous.addEventListener("click", goback)
        next.addEventListener("click", proeed)
        let positionchecker = {}
        for (i = 0; i < 6; i++) {
            positionchecker[i] = false
        }
        function checkuseranswer() {
            let zero = document.getElementById("0")
            let one = document.getElementById("1")
            let two = document.getElementById("2")
            let three = document.getElementById("3")
            let find =  data.results[number - 1].correct_answer
            if (zero.checked & zero.value == find) {
                correctanswer++
                positionchecker[number] = true
            }

            if (one.checked & one.value == find) {
                correctanswer++
                positionchecker[number] = true
                
            }

            if (two.checked & two.value == find) {
                correctanswer++
                positionchecker[number] = true
                
            }

            if (three.checked & three.value == find) {
                correctanswer++
                positionchecker[number] = true

            }
        }

        function proeed() {
            if (positionchecker[number] == false) {
                checkuseranswer()
            }
            number++
            if (number < 6) {
                createquestion()
            }
            else {
                number = 6
                questionnumber.innerText = `You got ${correctanswer} questions out of 5 questions right!!`
                question.innerText = ""
            }
        }
        function goback() {
            number--
            if (number > 0) {
                createquestion()
            }
            else {
                number = 1
            }
        }

        function createquestion() {
            if (number == 1) {
                previous.classList.add("hidden")
            }
            else{
                previous.classList.remove("hidden")
            }

            questionnumber.innerText = `Question  ${number}:`
            question.innerText = data.results[number - 1].question
            let correct = Math.floor((Math.random() * 3) + 0);
            let incorrectcount = 0
            for (let i=0; i < 4; i++) {
                if (i == correct) {
                    let option = document.createElement("input")
                    option.setAttribute("type", "radio")
                    option.name = "option selection"
                    option.setAttribute("id", `${i}`)
                    option.value = data.results[number - 1].correct_answer
                    let label = document.createElement('label')
                    let selction = document.createElement("div")
                    label.innerHTML = data.results[number - 1].correct_answer
                    label.style.marginLeft = "10px"
                    selction.appendChild(option)
                    selction.appendChild(label)
                    question.appendChild(selction)
                }else{
                    let option = document.createElement("input")
                    option.setAttribute("type", "radio")
                    option.value = data.results[number - 1].incorrect_answers[incorrectcount]
                    option.name = "option selection"
                    option.setAttribute("id", `${i}`)
                    let label = document.createElement('label')
                    let selction = document.createElement("div")
                    label.innerHTML = data.results[number - 1].incorrect_answers[incorrectcount]
                    label.style.marginLeft = "10px"
                    selction.appendChild(option)
                    selction.appendChild(label)
                    question.appendChild(selction)
                    incorrectcount++
                }
            }
        }
        createquestion()

        

    }catch(error) {
        document.getElementById("questionnumber").innerText = "Sorry the API could not be loaded.Please check your internet connection"
        document.getElementById("question").innerText = ""
    }
}

quiz()