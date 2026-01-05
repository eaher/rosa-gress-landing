<?php
header('Content-Type: application/json');

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get JSON input
$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// Sanitize and Validate
$name = filter_var($data['name'] ?? '', FILTER_SANITIZE_STRING);
$location = filter_var($data['location'] ?? '', FILTER_SANITIZE_STRING);
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$cp = filter_var($data['cp'] ?? '', FILTER_SANITIZE_STRING);
$phone = filter_var($data['phone'] ?? '', FILTER_SANITIZE_STRING);
$comments = filter_var($data['comments'] ?? '', FILTER_SANITIZE_STRING);
$privacy = isset($data['privacy']) && $data['privacy'] === true;

$errors = [];

if (empty($name)) $errors[] = 'Name is required';
if (empty($location)) $errors[] = 'Location is required';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email';
if (empty($cp)) $errors[] = 'CP is required';
if (empty($phone)) $errors[] = 'Phone is required';
if (!$privacy) $errors[] = 'Privacy policy must be accepted';

if (!empty($errors)) {
    echo json_encode(['success' => false, 'errors' => $errors]);
    exit;
}

// Simulate Mail Sending (or actually send if configured)
$to = 'info@example.com'; // Replace with actual email
$subject = 'New Lead from Landing Page';
$message = "Name: $name\nLocation: $location\nEmail: $email\nCP: $cp\nPhone: $phone\nComments: $comments";
$headers = 'From: noreply@example.com' . "\r\n" .
           'Reply-To: ' . $email . "\r\n" .
           'X-Mailer: PHP/' . phpversion();

// In local dev or static export without PHP server, this won't run.
// But on the server it will.
// We return success true for now.
// mail($to, $subject, $message, $headers);

echo json_encode(['success' => true]);
?>
