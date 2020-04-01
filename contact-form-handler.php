

<?php

$name = $_POST['txtName'];
$emailAddress = $_POST['txtEmail'];
$message = $_POST['txtComment'];
$errors = '';
$myemail = 'laizeferraz@gmail.com';

if(empty($name) ||
   empty($emailAddress)) {
     echo "Error: Name and Email are required";
     exit;
   }

   if(!preg_match(
    "/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i", $emailAddress)) {
      $errors .= "\n Error: Invalid email address";
    }

    if(empty($errors)) {
      $to = $myemail;
      $emailSubject = "Portfolio contact form submission: $name";
      $emailBody = "You have received a new message from your Portfolio website. Message details: \n Name: $name \n Email: $emailAddress \n Message \n $message";
      
      $headers = "From: $myemail\n";
      $headers .= "Reply-to: $emailAddress";

      mail($to, $emailSubject, $emailBody, $headers);
      header('Location: contact-form-thank-you.html');
    }
    ?>
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact fort handler</title>
    </head>
    <body>
      <!-- This page will display if there is a error filling up the contact form. -->
      <?php
        echo nl2br($errors);
        ?>
    </body>
    </html>
