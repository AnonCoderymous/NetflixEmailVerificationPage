1. Show the user login page.
2. Once user types the user name and password,
	and submit we will capture it.
3. Then we send a mail to user if username has provided an email and not username
	or number.
4. We are going to send mail to user, with a unique 6 digit code.
5. Base_64 Encoded and saved in the Browser.
6. If user enters 6 digit code correctly, through a prompt of success,
	and redirect to original Netflix Page.
7. Else we will prompt for wrong code entered and save each entry,
	as a COOKIE and if more than 3 attempts are wrong,
	gonna through him back to netflix page, followed by a prompt,
	Email verification failed !
8. Program it...