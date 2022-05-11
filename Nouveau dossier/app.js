//affiche un message d'alerte à l'utilisateur 
//alert(52);
//ce qui se trouve entre les paratmètres est le contenu du message

//----------------------------------------------------------------------------------

//confirm("souhaitez vous quitter le site ?");
/*function demandeSite(){ 
    if(confirm('souhaitez vous quitter le site ?')){ //SI c'est vrai = ok
        alert('bah mange tes morts'); //Alors fais ceci
    }
    else{ // sinon faux donc annuler = faux
        alert("bonne navigation sur norte site"); // fais ça
    }
}
demandeSite();*/
/*function proposition(){
    if(confirm('souhaitez vous une promotion de 30% ?')===false){ 
        alert("tant pis"); 
    }
    else{ 
        alert("Un mail vous a été envoyé dans la boîte de réception"); 
    }
}
proposition();*/

//------------------------------------------------------------------------------
/*function entrezVotreAge(){   
    let age = prompt ("entrez votre age");
    if(isNaN(age)){   
        if(confirm("Veuillez recommencer")){
            entrezVotreAge();

        }

    }   
    else{
        if(age < 18 ){
            alert('étudiant');
        }else if(age < 61){
            alert('actif');
        }else{12
            alert('senior');
        }
    }
}
entrezVotreAge();*/
/*function categorie(){ 
    let age = prompt("quel age avez-vous ?")
    switch(true){
        
    case age  < 10 :
        console.log('c\'est un enfant');

    case age  < 15 :
        console.log('c\'est un pré pubère');    

    case age < 18 : 
        console.log('c\'est un ado');

    case age < 60 :
        console.log("c'est un sénior");
        break;

    default:
        console.log('c\'est un humain');
    }
}

categorie();*/
/*let couleur = prompt("choisissez une couleur");

//2) demander à l'utilisateur de rentrer un élément parmi : mur, plafond, sol
//ex : prompt( 'choisissez : mur, plafond, sol') et stocker ça dans une variable "élément"

let element = prompt("choisissez un élément entre : mur, plafond, sol ");

/*3) Mettre une condition et vérifier que couleur et élément ne soit pas vide :
- Si l’utilisateur a bien remplit les deux éléments alors, affichez-lui en console les 2 variables
- Sinon si l’utilisateur a rempli qu’une des deux conditions, mettez une alert « vous n’avez rempli qu’un élément sur 2 »
- Sinon si, c’est qu’il n’a rien remplit, dites lui dites lui de bien vouloir remplir quelque chose*/

//---------------------------la boucle WHILE
// while = tant que en français

//tant que "condition n'est pas atteinte " répéter une liste d'instruction

/*let nombre = 5;
// je demande une boucle du type "tant que"
// tant que nombre est inférieur à 6 alors...
while(nombre <= 6){
    // alors...tu fais ceci :
    console.log('ligne : ' + nombre);
    nombre += 1;
}
/* nombre vaut 1 au premier tour
*/

//correction exercice boucle While :
// faire une boucle qui vérifie la saisie de l'utilisateur, tant qu'elle est vide, on lui repose la question
// prompt

// je stock dans "reponse" la valeur de la question "en forme ?" demandée à l'utilsateur
//let reponse = prompt("en forme ?");

// je boucle sur reponse TANT QUE reponse vaut vide (c'est à dire, tant que reponse est laissée pour vide par l'utilisateur)
//while(reponse == ""){
// j'utilise le double == pour comparer la VALEUR de reponse avec la VALEUR "" (vide)
// TANT que reponse vaut VIDE alors je repose la question
//reponse = prompt("en forme ?");
//}
// je sortirais de la boucle QUE SI reponse ne vaut plus vide
//let prenom = prompt("Quel est votre prénom ?");
//do{
   // prenom = prompt("Quel est votre prénom ?");
//}
    // tant que prenom est vide j'exécute le DO
//while(prenom == ""){
    // dès que je sors de la condition du while, alors je fais...
    //alert("Bonjour " + prenom);
//}

/*function toboggan(){
    let taille = prompt("Quelle est sa taille en cm ?");
    while(taille < 160){
        alert('Trop petit !');
        taille= prompt("Quelle est sa taille en cm ?");
    }
    alert('Vas-y !');
}
toboggan();*/
for( let decompte=250; decompte >= -1000; decompte--){
    console.log("Ligne :" + decompte);
}



