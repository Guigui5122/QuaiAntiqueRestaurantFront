export default class Route {
    constructor(url, title, pathHtml, authorize, pathJS ="") {
        this.url = url;
        this.title = title;
        this.pathHtml = pathHtml;
        this.pathJS = pathJS;
        this.authorize = authorize;
    }
}


/*

 [] -> tout le monde peut y accéder
 ["disconnected"] -> réserver aux utilisateurs déconnecté
 ["client"] -> réserver aux utilisateurs avec le rôle Client
 ["admin"] -> réserver aux utilisateurs avec le rôle Admin
 ["admin","client"] -> réserver aux utilisateurs avec le rôle Admin ou Client

 */