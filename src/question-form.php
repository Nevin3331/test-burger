<?php
header("Content-Type: text/html; charset=utf-8");

// Fetching form data
$name = $_POST['name'];
$sername = $_POST['sername'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$question = $_POST['question']; // Assuming you have a field named 'question' in your form

// Check if all required fields are not empty
if ($question != "" && $name != "" && $sername != "" && $phone != "" && $email != "") {
    $address = "nevin523348@gmail.com";
    $theme = "New message from your website"; // You need to define a subject for the email

    // Concatenate all the form data into the message
    $message = "Name: $name\n";
    $message .= "Surname: $sername\n";
    $message .= "Phone: $phone\n";
    $message .= "Email: $email\n";
    $message .= "Question: $question\n";

    // Send the email
    $verify = mail($address, $theme, $message, "Content-type:text/plain; charset=UTF-8\r\n");

    // Check if the mail function returned true
    if ($verify) {
        echo "<script>alert(\"Message successfully sent!\");window.location = '/index.html';</script>";
    } else {
        echo "<script>alert(\"Failed to send message. Please try again later.\");window.location = '/index.html';</script>";
    }
} else {
    // Handle case where required fields are not filled
    echo "<script>alert(\"Please fill in all the required fields.\");window.location = '/index.html';</script>";
}
?>
