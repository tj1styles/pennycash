
const fistNameInput = document.getElementById("firstNameInput")
const lastNameInput = document.getElementById("lastNamInput")
const emailInput = document.getElementById("emailInput")
const passWordInput = document.getElementById("passWordInput")
const createBtn = document.getElementById("createBtn")
const span = document.getElementById("spark")
createBtn.addEventListener("click",()=>{
    let firstnameV = fistNameInput.value
    let lastname = lastNameInput.value
    let passWordV = passWordInput.value
    let mailed = emailInput.value
    localStorage.setItem("firstNameInput",firstnameV)
    localStorage.setItem("lastNameInput",lastname)  
    localStorage.setItem("passWordInput",passWordV)  
    localStorage.setItem("emailInput",mailed)  
})