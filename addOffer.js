

function validerFormulaire() {
    console.log("Fonction validerFormulaire appelée !"); // Debug

    // Récupérer les valeurs des champs
    var titre = document.getElementById('titre').value.trim();
    var destination = document.getElementById('destination').value.trim();
    var dateDepart = document.getElementById('datedepart').value;
    var dateRetour = document.getElementById('dateretour').value;
    var prix = parseFloat(document.getElementById('prix').value.trim());

    console.log("Titre :", titre); // Debug
    console.log("Destination :", destination); // Debug
    console.log("Date de départ :", dateDepart); // Debug
    console.log("Date de retour :", dateRetour); // Debug
    console.log("Prix :", prix); // Debug

    // Validation du titre
    if (titre.length < 3) {
        alert("Le titre doit contenir au moins 3 caractères.");
        return false;
    }

    // Validation de la destination
    var destinationRegex = /^[A-Za-z\s]+$/;
    if (destination.length < 3 || !destinationRegex.test(destination)) {
        alert("La destination doit contenir au moins 3 lettres et uniquement des lettres et des espaces.");
        return false;
    }

    // Validation des dates
    var depart = new Date(dateDepart);
    var retour = new Date(dateRetour);
    if (retour <= depart) {
        alert("La date de retour doit être ultérieure à la date de départ.");
        return false;
    }

    // Validation du prix
    if (isNaN(prix) || prix <= 0) {
        alert("Le prix doit être un nombre positif.");
        return false;
    }

    // Si tout est valide
    alert("L'offre a été ajoutée avec succès !");
    return true;
}