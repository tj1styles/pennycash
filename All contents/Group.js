let cog = document.getElementById("cog")
let setDiv = document.getElementById("settingsDiv")
cog.addEventListener("click",()=>{
    setDiv.style.display = "block"
})
cog.addEventListener("dblclick",()=>{
    setDiv.style.display = "none"
})
