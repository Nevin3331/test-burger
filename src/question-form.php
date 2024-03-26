<?php header("Content-Type: text/html; charset=utf-8");

$name = $_POST['name'];
$sername = $_POST['sername'];
$phone = $_POST['phone'];
$email = $_POST['email'];

if(($question !="") & ($name !=""))
if(($question !="") & ($sername !=""))
if(($question !="") & ($phone !=""))
if(($question !="") & ($email !=""))

    $address = "nevin523348@gmail.com";
$massage = "Имя: ".$name."\nПитання: ".$question."";
$massage = "Фамилия: ".$sername."\nПитання: ".$question."";
$massage = "Телефон: ".$phone."\nПитання: ".$question."";
$massage = "Почта: ".$email."\nПитання: ".$question."";
$verify = mail($address, $theme, $massage, "Content-type:text/plain; charset=UTF-8\r\n");

print "<script>alert(\"Повідомлення успішно відправлено!\");window.location = '/index.html' </script>";
?>