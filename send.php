<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $nev = htmlspecialchars($_POST['nev']);
    $email = htmlspecialchars($_POST['email']);
    $uzenet = htmlspecialchars($_POST['uzenet']);

    $to = "bringosz01@gmail.com";

    $subject = "Új üzenet a weboldalról - BRINGOSZ";

    $message = "
    Új üzenet érkezett a weboldalról:

    Név: $nev
    Email: $email

    Üzenet:
    $uzenet
    ";

    $headers = "From: $email";

    if(mail($to, $subject, $message, $headers)){

        echo "<script>
        alert('Az üzenet elküldve!');
        window.location.href='kapcsolat.html';
        </script>";

    } else {

        echo "<script>
        alert('Hiba történt az üzenet küldésekor.');
        window.location.href='kapcsolat.html';
        </script>";

    }

}
?>