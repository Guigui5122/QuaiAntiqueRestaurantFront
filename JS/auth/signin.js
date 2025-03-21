const mailInput = document.getElementById("emailInput");
const passwordInput = document.getElementById("passwordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    // ici il faudra appeler l'API pour vérifier les credentials en BDD, // Email et Mot de passe TEST CONNEXION //
    if(mailInput.value == "test@mail.com" && passwordInput.value =="123"){
        // ici il faudra récupérer le vrai Token
        const token = "vhjjkljhgvjhjklmmjhgcvjkliifhbm!ilyfghuigyhbml,jh";
        setToken(token);
        //placer ce token en cookie
        setCookie(RoleCookieName, "client", 7);
        window.location.replace("/"); // redirection vers la page d'accueil si la connexion est ok !
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}