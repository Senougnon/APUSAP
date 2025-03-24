document.getElementById("messeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    //Afficher le message
    document.getElementById("confirmationMessage").style.display = "block";
    this.reset();
     // Réinitialiser les champs de date (important!)
     resetDateFields();

});



// Fonction pour gérer l'affichage des champs de date
function gererAffichageDates() {
    const jours = parseInt(document.getElementById("jours").value);
    const dateUniqueContainer = document.getElementById("dateUniqueContainer");
    const datesMultiplesContainer = document.getElementById("datesMultiplesContainer");

    if (jours === 1) {
        dateUniqueContainer.style.display = "block";
        datesMultiplesContainer.style.display = "none";
        // Important : Rendre le champ dateUnique requis, et les autres non requis
        document.getElementById("dateUnique").required = true;
        document.getElementById("dateDebut").required = false;
        document.getElementById("dateFin").required = false;
    } else if (jours > 1) {
        dateUniqueContainer.style.display = "none";
        datesMultiplesContainer.style.display = "block";
        document.getElementById("dateUnique").required = false;
        document.getElementById("dateDebut").required = true;
        document.getElementById("dateFin").required = true;
    } else {
        // Masquer les deux si la valeur n'est pas valide (par exemple, si l'utilisateur efface le champ)
        dateUniqueContainer.style.display = "none";
        datesMultiplesContainer.style.display = "none";
        document.getElementById("dateUnique").required = false;
        document.getElementById("dateDebut").required = false;
        document.getElementById("dateFin").required = false;

    }
}

//Fonction pour réinitialiser les champs date
function resetDateFields() {
    document.getElementById("dateUnique").value = "";
    document.getElementById("dateDebut").value = "";
    document.getElementById("dateFin").value = "";
}


// Appeler la fonction au chargement de la page et à chaque changement du nombre de jours
document.addEventListener("DOMContentLoaded", gererAffichageDates); // Au chargement
document.getElementById("jours").addEventListener("input", gererAffichageDates); // A chaque changement