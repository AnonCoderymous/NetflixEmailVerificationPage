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
        let all = document.cookie.split(";")
        for(let i=0; i<all.length; i++){
            if(all[i].includes("wrong_attempts")==true){
                let value = all[i].split('=')
                if(value[1]>=3){
                    window.alert("Too many failed attempts! Please try later");
                    document.cookie='wrong_attempts=; expires=Thu, 01 Jan 1970 00:00:00 UTC'
                    localStorage.clear()
                    document.location="https://www.netflix.com/"
                }else{
                    document.cookie=`wrong_attempts=${parseInt(value[1])+1}`
                }
                break
            }else{
                document.cookie="wrong_attempts=1"
            }
        }
    }
})
