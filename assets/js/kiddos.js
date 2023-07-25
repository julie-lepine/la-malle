'use strict';

/* AJOUTER PLUS TARD LES FONCTIONS DE FILTRE 1 NB ARTICLES PAR PAGE
Filtrer :

Let barbie = 
    [ prix : 20,
    Profession : ‘mécanicienne’,
    Recommandé : true,
]

Let jeux = (obj:) barbie[]/(), voiture[]/(), etc.
(On peut grouper plusieurs objets pour en appeler un à sa guise ? Si oui il suffit de les grouper et ensuite de boucler pour savoir si l’un à l’une propriété. Et faut-il utiliser un array ou un objet ? 

If (jeux.barbie.prix >= 20) { 
(Formule pour display dans la liste genre :)
   Jeux.style.classList.toggle = ‘hidden’;
} else {
    Jeux.style.classList.toggle = ‘hidden’;
(À voir ce que ça donne, il va bien falloir cacher les objets qui sont pas concernés) 
}
*/

//// UPPER IMAGE DISPPEARING ON SCROLL > 100 
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        let image = document.getElementById('upperImg');
        image.classList.add('hide');
    }
});

////// SORT BY
function filterAll() {
    let contents = document.getElementsByClassName('contenu');
    for (let i = 0; i < contents.length; i++) {
        if (contents[i].classList.contains('contenu')) {
            contents[i].classList.remove('hide');
        }        
    }
}

function filterNew() {
    let contents = document.getElementsByClassName('contenu');
    for (let i = 0; i < contents.length; i++) {
        if (!contents[i].classList.contains("new")) {
            contents[i].classList.add("hide");
        }
    }
}

function filterPromo() {
    let contents = document.getElementsByClassName('contenu');
    for (let i = 0; i < contents.length; i++) {
        if (!contents[i].classList.contains("promo")) {
            contents[i].classList.add("hide");
        }
    }
}

function filterSchool() {
    let contents = document.getElementsByClassName('contenu');
    for (let i = 0; i < contents.length; i++) {
        if (!contents[i].classList.contains("school")) {
            contents[i].classList.add("hide");
        }
    }
}

function filterCollege() {
    let contents = document.getElementsByClassName('contenu');
    for (let i = 0; i < contents.length; i++) {
        if (!contents[i].classList.contains("college")) {
            contents[i].classList.add("hide");
        }
    }
}