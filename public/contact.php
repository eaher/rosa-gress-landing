<?php
header('Content-Type: application/json');

// Configuration - User will need to update this email address
$to = "info@ceracor.com.ar"; // Placeholder email
$subject = "Nueva consulta desde Rosa Gres Landing";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize input
    $firstName = filter_var($_POST['firstName'] ?? '', FILTER_SANITIZE_STRING);
    $lastName = filter_var($_POST['lastName'] ?? '', FILTER_SANITIZE_STRING);
    $email = filter_var($_POST['email'] ?? '', FILTER_SANITIZE_EMAIL);
    $phone = filter_var($_POST['phone'] ?? '', FILTER_SANITIZE_STRING);
    $city = filter_var($_POST['city'] ?? '', FILTER_SANITIZE_STRING);
    $province = filter_var($_POST['province'] ?? '', FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'] ?? '', FILTER_SANITIZE_STRING);
    $contactChannel = filter_var($_POST['contactChannel'] ?? '', FILTER_SANITIZE_STRING);
    $type = filter_var($_POST['type'] ?? '', FILTER_SANITIZE_STRING);

    if (empty($firstName) || empty($email)) {
        echo json_encode(['success' => false, 'error' => 'Faltan campos obligatorios.']);
        exit;
    }

    // Prepare email body
    $email_content = "Has recibido una nueva consulta desde el sitio web:\n\n";
    $email_content .= "Tipo de Cliente: " . ($type == 'distributor' ? 'Constructor de piscinas' : 'Particular') . "\n";
    $email_content .= "Nombre: $firstName $lastName\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Teléfono: $phone\n";
    $email_content .= "Ciudad: $city, $province\n";
    $email_content .= "Canal de contacto preferido: $contactChannel\n\n";
    $email_content .= "Mensaje:\n$message\n";

    // Email headers
    $headers = "From: web@ceracor.com.ar\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'error' => 'No se pudo enviar el correo.']);
    }
} else {
    echo json_encode(['success' => false, 'error' => 'Método no permitido.']);
}
?>
