const numInput = document.getElementById("numInput")
const createBtnVer = document.getElementById("createBtnW0W")
createBtnVer.addEventListener("click",()=>{
    let x = numInput.value
 
    
  
    localStorage.setItem("numInput",x)
   
})