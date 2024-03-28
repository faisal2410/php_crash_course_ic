<?php

// ✅ Methods

// Built-in mail() function
// Using Library: PHPMailer, SwiftMailer etc.
// Using API: Sendgrid, Mailgun etc.


// ✅Safe Email Testing

// https://mailtrap.io
// You can check this on local server


//✅ PHPMailer;

// The world's most popular code for sending email from PHP
// https://github.com/PHPMailer/PHPMailer
// composer require phpmailer/phpmailer


// ✅How to use PHPMailer


// <?php
// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;
// require 'vendor/autoload.php';
// $mail = new PHPMailer(true);
// try {
// 	// Write Codes
// 	echo 'Message has been sent';
// } catch (Exception $e) {
// 	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }

// $mail->isSMTP();
// $mail->Host = 'smtp.mailtrap.io';
// $mail->SMTPAuth = true;
// $mail->Username = '88481333b65a6b';
// $mail->Password = 'e355f1d8f0b1db';
// $mail->SMTPSecure = 'tls';
// $mail->Port = 2525;

// $mail->setFrom('contact@example.com');
// $mail->addAddress('arefindev@gmail.com');
// $mail->addReplyTo('contact@example.com');
// $mail->addCC('cc@example.com');
// $mail->addBCC('bcc@example.com');
//
// $mail->addAttachment('uploads/plane.jpg', 'new_plane.jpg');
// $mail->isHTML(true);
// $mail->Subject = 'Here is email subject';
// $mail->Body = 'This is email body';
// $mail->send();


// ✅ Code Examples

// 👉 index.php

// <?php

// use PHPMailer\PHPMailer\PHPMailer;
// use PHPMailer\PHPMailer\SMTP;
// use PHPMailer\PHPMailer\Exception;

// require 'vendor/autoload.php';

// $mail = new PHPMailer(true);

// try {
	
//     $mail->isSMTP();
//     $mail->Host = 'smtp.mailtrap.io';
//     $mail->SMTPAuth = true;
//     $mail->Username = '88481333b65a6b';
//     $mail->Password = 'e355f1d8f0b1db';
//     $mail->SMTPSecure = 'tls';
//     $mail->Port = 2525;

//     $mail->setFrom('contact@example.com');
//     $mail->addAddress('arefindev@gmail.com');
//     $mail->addReplyTo('contact@example.com');
//     $mail->addCC('cc@example.com');
//     $mail->addBCC('bcc@example.com');
    
//     $mail->addAttachment('uploads/plane.jpg', 'new_plane.jpg');

//     $mail->isHTML(true);
//     $mail->Subject = 'TEST SUBJECT';
//     $mail->Body = 'TEST BODY FOR EMAIL';

//     $mail->send();

// 	echo 'Message has been sent';
// } catch (Exception $e) {
// 	echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }


