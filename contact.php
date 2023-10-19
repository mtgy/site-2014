<?php
// The email address you want all emails to be sent to.
$to = "tanguy.marine@gmail.com";

// The subject will display the senders name
$subject = $_POST['name'];

// The Message
$message = $_POST['message'];

// From
$from = $_POST['email'];

// Header
$headers = "From:" . $from;

$comment=$_POST['comment'];

// Valid Email Function
function is_valid_email($from) {
  return preg_match('#^[a-z0-9.!\#$%&\'*+-/=?^_`{|}~]+@([0-9.]+|([^\s]+\.+[a-z]{2,6}))$#si', $from);
}

// Check if valid email and send, else display error
if (!is_valid_email($from)) {
  echo 'invalid_email';
} else if (!empty($subject) && !empty($message) && !empty($from) && empty($comment)) {
	mail($to,$subject,$message,$headers);
	echo "success";
} else {
	echo "error";
}
?> 