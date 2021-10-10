function display(){
    let amount = document.getElementById("amount").value
    let rate = document.getElementById("rate").value.trim()
    let months = document.getElementById("month").value

    let answer = document.getElementById("answer")
    answer.style.fontSize = "50px"
    const interest = (amount * (rate * 0.01)) / months;
    const total = ((amount / months) + interest).toFixed(2);

    switch (total) {
        case "NaN":
            answer.innerHTML = ""
            if (rate.length > 0) {
                alert("Please provide a valid interest rate")
            }
            break;
        
        case "Infinity":
            answer.innerHTML = ""
            break
        
        default:
            if (rate != "" & amount != "") {
                answer.innerHTML = `Monthly Payment = ${total}`
            }
    }
}