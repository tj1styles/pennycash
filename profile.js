let collect = localStorage.getItem("lastNameInput")
let collect1 = localStorage.getItem("firstNameInput")
let collect2 = localStorage.getItem("passWordInput")
let collect3 = localStorage.getItem("emailInput")
let namePara = document.getElementById("namePara")
let emailPara = document.getElementById("emailPara")
let passPara = document.getElementById("passwordPara")
namePara.textContent = collect1 +" "+collect
emailPara.textContent = collect3
let k = collect2.length
let hpass = ""
let dhpass = hpass.padEnd(k, '*')
passPara.textContent = dhpass
let cog = document.getElementById("cog")
let setDiv = document.getElementById("settingsDiv")
cog.addEventListener("click",()=>{
    setDiv.style.display = "block"
})
cog.addEventListener("dblclick",()=>{
    setDiv.style.display = "none"
})
