//implémenter le JS de ma page 

// const appel les ID des différents input du formulaire :
const inputNom = document.getElementById("nomInput");
const inputPrenom = document.getElementById("prenomInput");
const inputMail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidationPassword = document.getElementById("validatePasswordInput");
// on ajoute une action a réaliser avec addEventListener, avec "keyup" pour le contrôle au lâcher de la touche du clavier
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//on crée une fonction pour contrôler la validité du formulaire
function validateForm(){
    validateRequired(inputNom);
    validateRequired(inputPrenom);
}

function validateRequired(input){
    if(input.value != ''){  // si le champ de l'input est différent de'vide' alors :
        input.classList.add("is-valid"); // le champ est bien rempli donc valide
        input.classList.remove("is-invalid"); // le champ est vide donc invalide
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-valid");
    }
}

