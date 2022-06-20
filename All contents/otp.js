// Otp Page
let secs = document.getElementById("secs")
let coder = document.getElementById("coder")
let otpPassWord = `2345`
let passInput = document.getElementById("passInput")
let resendPara = document.getElementById("resendP")
let codeBtn = document.getElementById("code")
let otpPara = document.getElementById("otpPara")
codeBtn.addEventListener("click",countDown)
function countDown(sed){
    codeBtn.style.display = "none"
    resendPara.style.display = "block"
    let count = sed
    let interval = setInterval(function() {
        count--;
        if(count<=0){
            codeBtn.style.display = "block"
            codeBtn.textContent = "Resend"
            coder.style.display = "block"
            coder.textContent = "Finish up!"
            otpPara.style.display = "block"
            otpPara.textContent = `Your Code is ${otpPassWord}`
            sed = 0
            clearInterval(interval)
        }
        secs.innerHTML = count
    },1000);

    countDown(59)
}

coder.addEventListener("click",()=>{
     if(passInput.value == otpPassWord){
          window.location.href = `Dashboard.html`
     }
     else{
         alert("Wrong OTP Inputed, Try again")
     }
})
let spanotp = document.getElementById("firstfourNumbers")
let spanotp2 = document.getElementById("lasttwoNumbers")
let coll2 = localStorage.getItem("numInput")
let p = coll2.substring(0,4)
let k = p.padEnd(9, "*")
let y = coll2.substring(coll2.length-2)
spanotp.textContent = k
spanotp2.textContent = y





// Verifynum Page
