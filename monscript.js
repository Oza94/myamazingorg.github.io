
// des variables Javascript
var machaine = "hello world";
var compteur = 0;

// récupérer une référence vers la balise bouton
var bouton = document.getElementById('monbouton');

// afficher une popup au chargement de la page
alert(machaine + "!!!");

// une fonction qui remplace le texte du bouton
function majBouton() {
    bouton.innerHTML = "J'ai été clické " + compteur + " fois!";
    compteur += 1;
}

// j'appelle ma fonction 1 fois au chargement de la page
majBouton();

// j'appelle ma fonction lorsque l'utilisateur clique sur la bouton
bouton.onclick = majBouton;