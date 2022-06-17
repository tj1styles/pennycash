let cog = document.getElementById("cog")
let setDiv = document.getElementById("settingsDiv")
let saveBtn = document.getElementById("saveBtn")
let accName = document.getElementById("accountNameInput")
let bankName = document.getElementById("bankNameInput")
let bankType = document.getElementById("bankTypeinput")
cog.addEventListener("click",()=>{
    setDiv.style.display = "block"
})
cog.addEventListener("dblclick",()=>{
    setDiv.style.display = "none"
})
saveBtn.addEventListener("click",()=>{
    let accNameV = accName.value
    let bankTypeV = bankType.value
    let bankNameV = bankName.value
    localStorage.setItem("bankNameInput",bankNameV)
    localStorage.setItem("bankTypeInput",bankTypeV)
    localStorage.setItem("accountNameInput",accNameV)
})