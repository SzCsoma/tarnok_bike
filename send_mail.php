<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name    = strip_tags($_POST['name']);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST['message']);
   
    $to= "bbtbud@gmail.com";
    $subject = "New message from BBTB";

    $body  = "New message from website:\n\n";
    $body .= "Name: {$name}\n";
    $body .= "Email: {$email}\n";
    $body .= "Message:\n{$message}\n";

    
    $headers  = "From: Best Bike Tours <noreply@bbtb.hu>\r\n";
    $headers .= "Reply-To: {$email}\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    
    if (mail($to, $subject, $body, $headers)) {

        echo "<script>
                alert('Message sent successfully!');
                window.location.href='kapcsolat.html';
              </script>";

    } else {

        echo "<script>
                alert('Error sending message.');
                window.location.href='kapcsolat.html';
              </script>";
    }
}

?>