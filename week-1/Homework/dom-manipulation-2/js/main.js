const blueBtn = document.querySelector("#blueBtn")
const orangeBtn = document.querySelector("#orangeBtn")
const greenBtn = document.querySelector("#greenBtn")

const jumbotron = document.querySelector(".jumbotron")
const btnPrimary = document.querySelector(".btn-lrg")
const btnVolunteer = document.querySelector(".btn-secondary")

blueBtn.addEventListener("click", blueColourBtn)
function blueColourBtn(){
    jumbotron.style.backgroundColor = "#588fbd"
    btnPrimary.style.backgroundColor = "#ffa500"
    btnVolunteer.style.backgroundColor = "black"
    btnVolunteer.style.color = "white"
}

orangeBtn.addEventListener("click", orangeColourBtn)
function orangeColourBtn(){
    jumbotron.style.backgroundColor = "#f0ad4e"
    btnPrimary.style.backgroundColor = "#5751fd"
    btnVolunteer.style.backgroundColor = "#31b0d5"
    btnVolunteer.style.color = "white"
}

greenBtn.addEventListener("click", greenColourBtn)
function greenColourBtn(){
    jumbotron.style.backgroundColor = "#87ca8a"
    btnPrimary.style.backgroundColor = "black"
    btnVolunteer.style.backgroundColor = "#8c9c08"
}

const emailInput = document.querySelector("#exampleInputEmail1")
const nameInput = document.querySelector("#example-text-input")
const descriptionInput = document.querySelector("#exampleTextarea")
const form = document.querySelector("form")

const submitForm = (e) => {
    e.preventDefault()
    const validEmail = emailInput.value.length > 0 && emailInput.value.includes("@")
    const validName = nameInput.value.length > 0
    const validDescription = descriptionInput.value.length > 0

    const validForm = validEmail && validName && validDescription
    
}



form.addEventListener("submit", (e) => submitForm(e))