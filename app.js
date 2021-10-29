const resetBtn = document.querySelector(".reset")
const numPeople = document.querySelector("#people__total")
const bill = document.querySelector("#bill")
const form = document.querySelector("form")
const radioBtnArray = document.querySelectorAll('.percent')
const custom = document.querySelector('.custom')
const tipDisplay = document.querySelector('#tip__calculated')
const totalDisplay =  document.querySelector('#total__calculated')
let radioValue = 5

radioBtnArray.forEach(btn => {
    btn.addEventListener('input', evt => {
        if (evt.target == radioBtnArray[0]) {
            radioValue = 5;

        } else if (evt.target == radioBtnArray[1]) {
            radioValue = 10;
        } else if (evt.target == radioBtnArray[2]) {
            radioValue = 15;
        } else if (evt.target == radioBtnArray[3]) {
            radioValue = 25;
        } else if (evt.target == radioBtnArray[4]) {
            radioValue = 50;
        } else {
            radioValue = custom.value;
        }
    })
})

form.addEventListener("input", () => {
    if (numPeople.value <= 0) {
        document.querySelector(".people__error").style.display = "block"
        numPeople.style.borderColor = "red"
    }

    else if (bill.value <= 0) {
        document.querySelector(".error").style.display = "block"
        bill.style.borderColor = "red"
    }




    else {
    
        document.querySelector(".error").style.display = "none"
        numPeople.style.borderColor = "green"
        document.querySelector(".people__error").style.display = "none"
        bill.style.borderColor = "green"

        let totalTipAmount = (radioValue / 100) * bill.value;
        let tipValue = parseFloat(totalTipAmount / numPeople.value)

        tipDisplay.value =`$ ${parseFloat(totalTipAmount / numPeople.value).toFixed(2)}`
        totalDisplay.value =`$ ${(parseFloat(bill.value / numPeople.value) + tipValue).toFixed(2)}`
        resetBtn.disabled = false; 
    }
})

resetBtn.addEventListener('click',()=>{
   if((bill.value = "0") && (numPeople.value="0") && (custom.value= "0") &&  (tipDisplay.value = "0") && (totalDisplay.value= "0")){
    resetBtn.disabled = true; 
   }

})







