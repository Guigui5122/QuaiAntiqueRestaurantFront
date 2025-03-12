

// import Route from "./Route.js";
// import { allRoutes, websiteName } from "./allRoutes.js";

// // Création d'une route pour la page 404 (page introuvable)
// const route404 = new Route("404", "Page introuvable", "pages/404.html");

// // Fonction pour récupérer la route correspondant à une URL donnée
// const getRouteByUrl = (url) => {
//   let currentRoute = null;
//   // Parcours de toutes les routes pour trouver la correspondance
//   allRoutes.forEach((element) => {
//     if (element.url == url) {
//       currentRoute = element;
//     }
//   });
//   // Si aucune correspondance n'est trouvée, on retourne la route 404
//   if (currentRoute != null) {
//     return currentRoute;
//   } else {
//     return route404;
//   }
// };

// // Fonction pour charger le contenu de la page

// const LoadContentPage = async () => {
//   const path = window.location.pathname;
//   const actualRoute = getRouteByUrl(path);

//   console.log("Chargement de :", actualRoute.pathHtml); // Debug

//   try {
//     const response = await fetch(actualRoute.pathHtml);
    
//     if (!response.ok) throw new Error(`Erreur ${response.status}: ${response.statusText}`);
    
//     const html = await response.text();
//     document.getElementById("main-page").innerHTML = html;
//   } catch (error) {
//     console.error("Erreur lors du chargement de la page :", error);
//     document.getElementById("main-page").innerHTML = `<p>Erreur de chargement : ${error.message}</p>`;
//   }
// };


//   // Ajout du contenu JavaScript
//   if (actualRoute.pathJS != "") {
//     // Création d'une balise script
//     var scriptTag = document.createElement("script");
//     scriptTag.setAttribute("type", "text/javascript");
//     scriptTag.setAttribute("src", actualRoute.pathJS);

//     // Ajout de la balise script au corps du document
//     document.querySelector("body").appendChild(scriptTag);
//   }

//   // Changement du titre de la page
//   document.title = actualRoute.title + " - " + websiteName;


// // Fonction pour gérer les événements de routage (clic sur les liens)
// const routeEvent = (event) => {
//   event = event || window.event;
//   event.preventDefault();
//   // Mise à jour de l'URL dans l'historique du navigateur
//   window.history.pushState({}, "", event.target.href);
//   // Chargement du contenu de la nouvelle page
//   LoadContentPage();
// };

// // Gestion de l'événement de retour en arrière dans l'historique du navigateur
// window.onpopstate = LoadContentPage;
// // Assignation de la fonction routeEvent à la propriété route de la fenêtre
// window.route = routeEvent;
// // Chargement du contenu de la page au chargement initial
// LoadContentPage();

// document.addEventListener("DOMContentLoaded", () => {
//   console.log("Le DOM est chargé !");
//   LoadContentPage();
// });
console.log("✅ router.js a bien été chargé !");

import Route from "./Route.js";
import { allRoutes, websiteName } from "./allRoutes.js";

console.log("Liste des routes chargées :", allRoutes);

// Création d'une route pour la page 404 (page introuvable)
const route404 = new Route("404", "Page introuvable", "pages/404.html");

// Fonction pour récupérer la route correspondant à une URL donnée
const getRouteByUrl = (url) => {
    let currentRoute = null;
    // Parcours de toutes les routes pour trouver la correspondance
    allRoutes.forEach((element) => {
        if (element.url == url) {
            currentRoute = element;
        }
    });
    // Si aucune correspondance n'est trouvée, on retourne la route 404
    if (currentRoute != null) {
        return currentRoute;
    } else {
        return route404;
    }
};

// Fonction pour charger le contenu de la page

const LoadContentPage = async () => {
    console.log("📢 LoadContentPage() a été appelée !");
    const path = window.location.pathname;
    console.log("📌 URL actuelle :", path);

    console.log(
        "🔍 Debug: Vérification de getRouteByUrl :",
        getRouteByUrl(path)
    );
    const actualRoute = getRouteByUrl(path);

    if (!actualRoute) {
        console.error("❌ Aucune route trouvée !");
        return;
    }

    console.log("🔗 Route trouvée :", actualRoute);

    // Changement du titre de la page
    document.title = actualRoute.title + " - " + websiteName;

    try {
        const response = await fetch(actualRoute.pathHtml);
        if (!response.ok)
            throw new Error(
                `Erreur ${response.status}: ${response.statusText}`
            );

        const html = await response.text();
        document.getElementById("main-page").innerHTML = html;

        // ✅ Déplacement de l'ajout du script ici
        if (actualRoute.pathJS && actualRoute.pathJS !== "") {
            var scriptTag = document.createElement("script");
            scriptTag.setAttribute("type", "text/javascript");
            scriptTag.setAttribute("src", actualRoute.pathJS);
            document.querySelector("body").appendChild(scriptTag);
        }
    } catch (error) {
        console.error("Erreur lors du chargement de la page :", error);
        document.getElementById(
            "main-page"
        ).innerHTML = `<p>Erreur de chargement : ${error.message}</p>`;
    }
};

// Fonction pour gérer les événements de routage (clic sur les liens)
const routeEvent = (event) => {
    event = event || window.event;
    event.preventDefault();
    // Mise à jour de l'URL dans l'historique du navigateur
    window.history.pushState({}, "", event.target.href);
    // Chargement du contenu de la nouvelle page
    LoadContentPage();
};

// Gestion de l'événement de retour en arrière dans l'historique du navigateur
window.onpopstate = LoadContentPage;
// Assignation de la fonction routeEvent à la propriété route de la fenêtre
window.route = routeEvent;
// Chargement du contenu de la page au chargement initial
LoadContentPage();

document.addEventListener("DOMContentLoaded", () => {
    console.log("Le DOM est chargé !");
    LoadContentPage();
});