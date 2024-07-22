<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        
        // Get form fields
        $name = htmlspecialchars($_POST['name']);
        $email = htmlspecialchars($_POST['email']);
        $message = htmlspecialchars($_POST['message']);

        // Email details
        $to = 'suha@botsolutions.tech';
        $subject = 'Contact Form Submission from ' . $name;
        $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
        $headers = "From: $email";

        // Send email
        if (mail($to, $subject, $body, $headers)) {
            $response = "Thank you for contacting us, $name. We will get back to you shortly.";
        } else {
            $response = "Sorry, there was an error sending your message. Please try again later.";
        }
    }
?>
