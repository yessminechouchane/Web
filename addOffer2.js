document.addEventListener("DOMContentLoaded", function () {
    // Sélection des champs à surveiller
    let titreInput = document.getElementById("titre");
    let destinationInput = document.getElementById("destination");

    // Ajout de l'événement onKeyup sur le titre
    titreInput.addEventListener("keyup", function () {
        let titre = titreInput.value.trim();
        if (titre.length < 3) {
            afficherMessage("errorTitre", "Le titre doit contenir au moins 3 caractères.", "error");
        } else {
            afficherMessage("errorTitre", "✓ Correct", "success");
        }
    });

    // Ajout de l'événement onKeyup sur la destination
    destinationInput.addEventListener("keyup", function () {
        let destination = destinationInput.value.trim();
        let destinationRegex = /^[A-Za-z\s]+$/;
        if (destination.length < 3 || !destinationRegex.test(destination)) {
            afficherMessage("errorDestination", "La destination doit contenir au moins 3 lettres et uniquement des lettres et des espaces.", "error");
        } else {
            afficherMessage("errorDestination", "✓ Correct", "success");
        }
    });

    // Fonction pour afficher les messages d'erreur ou de succès
    function afficherMessage(id, message, type) {
        let element = document.getElementById(id);
        element.textContent = message;
        element.className = type; // Applique la classe 'error' ou 'success'
    }
});
