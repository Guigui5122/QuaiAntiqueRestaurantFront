//implémenter le JS de ma page 

// const appel les ID des différents input du formulaire :
const inputNom = document.getElementById("nomInput");
const inputPrenom = document.getElementById("prenomInput");
const inputMail = document.getElementById("emailInput");
const inputPassword = document.getElementById("passwordInput");
const inputValidationPassword = document.getElementById("validatePasswordInput");
const btnValidation = document.getElementById("btn-validationinscription");
// on ajoute une action a réaliser avec addEventListener, avec "keyup" pour le contrôle au lâcher de la touche du clavier
inputNom.addEventListener("keyup", validateForm);
inputPrenom.addEventListener("keyup", validateForm);
inputMail.addEventListener("keyup", validateForm);
inputPassword.addEventListener("keyup", validateForm);
inputValidationPassword.addEventListener("keyup", validateForm);

//on crée une fonction pour contrôler la validité du formulaire
function validateForm(){
    const nomOk = validateRequired(inputNom);
    const prenomOk = validateRequired(inputPrenom);
    const mailOk = validateMail(inputMail);

    if(nomOk && prenomOk && mailOk){
        btnValidation.disabled = false;
    }
    else{
        btnValidation.disabled = true;
    }
}

function validateRequired(input){
    if(input.value != ''){  // si le champ de l'input est différent de'vide' alors :
        input.classList.add("is-valid"); // le champ est bien rempli donc valide
        input.classList.remove("is-invalid"); // le champ est vide donc invalide
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}

// Fonction pour vérifier la validité du mail saisi
function validateMail(input){
    // définir le regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mailUser = input.value;
    if(mailUser.match(emailRegex)){
        input.classList.add("is-valid"); // le champ est bien rempli donc valide
        input.classList.remove("is-invalid"); // le champ est vide donc invalide
        return true;
    }
    else{
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        return false;
    }
}
