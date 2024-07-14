<?php
if ($_SERVER ['REQUEST_METHOD'] === 'POST') {
    $destinataire = 'cedrictognifode@gmail.com'; // Remplacez par votre adresse e-mail
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Entête de l'e-mail
    $entete = "From: $nom $prenom <$email>\r\n";
    $entete .= "Reply-To: $prenom <$email>\r\n";

    // Envoi de l'e-mail
    if (mail($destinataire, 'Nouveau message depuis le formulaire de contact', $message, $entete)) {
        echo 'Votre message a bien été envoyé !';
    } else {
        echo 'Erreur lors de l\'envoi de l\'e-mail.';
    }
}
?>