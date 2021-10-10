const billamount = document.getElementById('billamount')
const percentagetip = document.getElementById('percentagetip')
const tipamount = document.getElementById("tipamount")
const total = document.getElementById("total")

const displayanswer = () => {
    
    const totalamount = Number(billamount.value)
    const totaltip = Number(percentagetip.value)
    if ( isNaN(totalamount) == false &&  isNaN(totaltip) == false && billamount.value.trim() != "" && percentagetip.value.trim() != "") {
        tipamount.value = `$ ${(totalamount * totaltip)/100}`
        total.value = `$ ${(totalamount + (totalamount * totaltip)/100)}`
        return
    }
    alert("Inputs provided are not correct")
}



