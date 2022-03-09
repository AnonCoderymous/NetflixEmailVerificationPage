<?php
	if(isset($_SERVER['REQUEST_METHOD']) == 'POST'){
		if(isset($_POST['Email'])){
		    $random_otp = rand(100000,150000);
			$email = trim($_POST['Email']);
			// require '../../../PHPMailer/_lib/class.phpmailer.php';
			$message = "<h1 align='center'>Email Verification</h1>\n";
			$message .= "<p style='font-size:20px;color:black'>Dear User, Your 6 digit verification code is <span style='font-weight:bolder;color:lightgrey;font-size:25px'>".$random_otp."</span></p>";
			$message .= "<br>";
			$message .= "<br>";
			$message .= "<span style='color:red'>Please don't share your OTP with someone!</span>";
			$from_email = "support@nflix.com";
			$subject = "Verify your Email";
                //$headers  = "From: Netflix <$from_email>\n";
                $headers = "From: Netflix ".$from_email."\r\n";
                $headers .= "Cc: Netflix <$from_email>\n"; 
                $headers .= "X-Sender: Netflix <$from_email>\n";
                $headers .= 'X-Mailer: PHP/' . phpversion();
                $headers .= "X-Priority: 1\n"; // Urgent message!
                $headers .= "Return-Path: $from_email\n"; // Return path for errors
                $headers .= "MIME-Version: 1.0\r\n";
                $headers .= "Content-Type: text/html; charset=iso-8859-1\n";
			// $mail = new PHPMailer;
			// $mail->isSMTP();
			// $mail->SMTPSecure = 'ssl';
			// $mail->SMTPAuth = false;
			// $mail->Host = 'sendmail@test.com';

			if(mail($email, $subject, $message, $headers)){
				echo $random_otp;
			}else{
				echo "Failed";
			}
		}
	}
?>