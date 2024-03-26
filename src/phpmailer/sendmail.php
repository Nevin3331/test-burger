<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $surname = $_POST['surname'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];

    // Email configuration
    $to = "nevin523348@gmail.com"; // Change this to your email address
    $subject = "New Order";
    $message = "Name: $name\nSurname: $surname\nPhone: $phone\nEmail: $email";

    // Send email
    if (mail($to, $subject, $message)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
}
?>
