let collect = localStorage.getItem("lastNameInput")
let collect1 = localStorage.getItem("firstNameInput")
let span = document.getElementById("spark")
span.textContent = collect1 + " " + collect
let cog = document.getElementById("cog")
let setDiv = document.getElementById("settingsDiv")
cog.addEventListener("click",()=>{
    setDiv.style.display = "block"
})
cog.addEventListener("dblclick",()=>{
    setDiv.style.display = "none"
})
