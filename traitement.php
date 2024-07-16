
<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

// Inclure les fichiers de PHPMailer
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);

    try {
        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'cedrictognifode@gmail.com'; // Remplace par ton adresse email
        $mail->Password = 'ebkdesfjkgdngfln'; // Remplace par ton mot de passe ou mot de passe d'application
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;


        // Destinataires
        $mail->setFrom('cedrictognifode@.com', 'CTAM229');
        $mail->addAddress('louisefabre94@gmail.com', 'Louise Fabre'); 
        $mail->addAddress('mediumdanhinou@gmail.com', 'Medium Danhinou'); 
        $mail->addAddress('danhinoumedium@gmail.com', 'Danhinou'); 

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Nouveau message de contact';
        $mail->Body    = "Nom: $name <br>Prénom: $prenom <br>Email: $email <br>Message: $message";

        $mail->send();
        echo 'Message envoyé avec succès';
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur de Mailer: {$mail->ErrorInfo}";
    }
} else {
    echo 'Méthode de requête non supportée';
}

?>
