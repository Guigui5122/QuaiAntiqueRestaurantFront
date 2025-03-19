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
    const passwordOk = validatePassword(inputPassword);
    const passwordConfirmOk = validateConfirmationPassword(inputPassword, inputValidationPassword);

    if(nomOk && prenomOk && mailOk && passwordOk && passwordConfirmOk){
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
// Fonction pour vérifier la conformité du mot de passe 8 huit caracteres avec au moins : 1 minuscule 1 majuscule 1 chiffre et 1 caractere special 
//regex password : const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;

function validatePassword(input){
    // définir le regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[A-Za-z\d\W_]{8,}$/;
    const passwordUser = input.value;
    if(passwordUser.match(passwordRegex)){
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

function validateConfirmationPassword(inputPwd, inputConfirmPwd){
    if(inputPwd.value == inputConfirmPwd.value){
        inputConfirmPwd.classList.add("is-valid");
        inputConfirmPwd.classList.remove("is-invalid");
        return true;
    }
    else{
        inputConfirmPwd.classList.remove("is-valid");
        inputConfirmPwd.classList.add("is-invalid");
        return false;
        
    }
}