if(
localStorage.OTP==null
||localStorage.OTP.length==0
){
  window.alert("Please Sign in first!")
  window.location.href="../"
}
document.querySelector("button").addEventListener("click", e => {
    let code_of_user = document.querySelector("input").value
    e.preventDefault()
    var otp = atob(localStorage.OTP)
    if(otp==code_of_user){
        localStorage.clear()
        toastr.success("Thank you for verifying your mail!", "Verification Successfull.")
        setTimeout(function(){
            window.location.href = "https://www.netflix.com/"
        },2000)
    }else{
        toastr.warning("Your OTP is wrong, please retry again.", "OTP is Incorrect")
    }
})