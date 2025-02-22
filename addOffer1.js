document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("offerForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher l'envoi du formulaire si erreur

        // Réinitialiser les messages d'erreur et de succès
        document.querySelectorAll(".error, .success").forEach(el => el.textContent = "");

        let isValid = true;

        // Récupérer les champs
        let titre = document.getElementById("titre").value.trim();
        let destination = document.getElementById("destination").value.trim();
        let dateDepart = document.getElementById("datedepart").value;
        let dateRetour = document.getElementById("dateretour").value;
        let prix = document.getElementById("prix").value.trim();

        // Validation du titre
        if (titre.length < 3) {
            afficherMessage("errorTitre", "Le titre doit contenir au moins 3 caractères.", "error");
            isValid = false;
        } else {
            afficherMessage("errorTitre", "✓ Titre valide", "success");
        }

        // Validation de la destination
        let destinationRegex = /^[A-Za-z\s]+$/;
        if (destination.length < 3 || !destinationRegex.test(destination)) {
            afficherMessage("errorDestination", "La destination doit contenir au moins 3 lettres et uniquement des lettres et des espaces.", "error");
            isValid = false;
        } else {
            afficherMessage("errorDestination", "✓ Destination valide", "success");
        }

        // Validation des dates
        let depart = new Date(dateDepart);
        let retour = new Date(dateRetour);
        if (!dateDepart || isNaN(depart.getTime())) {
            afficherMessage("errorDateDepart", "Veuillez entrer une date de départ valide.", "error");
            isValid = false;
        } else {
            afficherMessage("errorDateDepart", "✓ Date de départ valide", "success");
        }

        if (!dateRetour || isNaN(retour.getTime()) || retour <= depart) {
            afficherMessage("errorDateRetour", "La date de retour doit être valide et ultérieure à la date de départ.", "error");
            isValid = false;
        } else {
            afficherMessage("errorDateRetour", "✓ Date de retour valide", "success");
        }

        // Validation du prix
        let prixFloat = parseFloat(prix);
        if (isNaN(prixFloat) || prixFloat <= 0) {
            afficherMessage("errorPrix", "Le prix doit être un nombre positif.", "error");
            isValid = false;
        } else {
            afficherMessage("errorPrix", "✓ Prix valide", "success");
        }

        // Si tout est valide
        if (isValid) {
            alert("L'offre a été ajoutée avec succès !");
            document.getElementById("offerForm").reset(); // Réinitialiser le formulaire
        }
    });

    function afficherMessage(id, message, type) {
        let element = document.getElementById(id);
        element.textContent = message;
        element.className = type; // Applique la classe 'error' ou 'success'
    }
});
