let button = document.querySelector("button")

//validate the form
button.addEventListener("click", e => {
    let mail = document.querySelector("#email").value
	let password = document.querySelector("#password").value
	e.preventDefault()
	if(mail == "" || password == "")
	{
		toastr.warning("Please specify username and password to Log in to your account !", "Username or Password is empty!")
		return false
	}

	if(mail.includes("@gmail.com")==false && mail.includes("@yahoo.com")==false && mail.includes("@hotmail.com")==false){
		toastr.info("Must include @gmail.com, @yahoo.com or @hotmal.com", "Wrong Pattern!")
		return false
	}
	if(password.length < 4 ){
		toastr.info("Password must include 4 letters.", "Incorrect Password!")
		return false	
	}

	checkname = mail.split("@")
	if(checkname[0].length==0){
		toastr.info("Mail is incorrect!", "Re-check your mail !")
		return false
	}

	if(mail == password){
		toastr.warning("Username and Password cannot be same !", "Error Same fields value!")
		return false
	}

	var details = {
		'email' : mail,
		'password' : password
	}

	var formData = []

	for( var property in details){
		var encodedKey = encodeURIComponent(property)
		var encodedValue = encodeURIComponent(details[property])
		formData.push(encodedKey + "=" + encodedValue)
	}
	formData = formData.join("&")

	fetch("./PHP/",{
		method : 'POST',
		headers : {
			"Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8"
		},
		body : formData
	})
	.then(response => {
		if(response.status==200){
			if(response.type=="basic" && response.url.includes("PHP")==true){
				setTimeout(function(){
					//toastr.success("Log In was successfully !", "Welcome to Netflix")
				},1500)
				setTimeout(function(e){
					//document.location = document.querySelectorAll("a")[0].origin
				},1500)
			} else {
				console.log(response)
				toastr.warning("Sorry for inconvenience", "An Error Occured")
				setTimeout(function(){
					//document.location = document.querySelectorAll("a")[0].origin
				},1000)
			}
		}
	})

	//mail verification if actual username typed is email
	const Req = new XMLHttpRequest()
		Req.onreadystatechange = function(){
			if(this.readyState==4){
				localStorage.setItem("OTP", btoa(this.responseText))
				window.location.href = "../NetflixClone/EmailVerification"
			}
		}
	Req.open("POST", "../NetflixClone/api/smtpmail/index.php", async=true)
	Req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
	Req.send("Email="+mail)
})