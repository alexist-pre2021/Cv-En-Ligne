//--------------------- Gestion des exceptions-------------------------

// esaayer ce bout de code via un try
try{
    let recompense = prompt("choisissez votre récompense : épée, arc, hache");
    let degats;
    // conditions switch
    switch(recompense){
        // cas 1:
        case 'épée' :
            degats = 10 ;
            break ;
            
        // cas 2
        case 'arc' :
            degats = 12;
            break;
        // cas 3
        case 'hache' :
            degats = 11;
            break; 
        // si l'utilisateur rentre n'importe quoi d'autre que les cas précédents
        default :
            throw new Error('Vous ne pouvez pas tricher !!');
    }
    // instructions si le try fonctionne :
    alert("Vous avez choisi : " + recompense + "qui fait" + degats + "nombre de dégats par coup.")
}
// on attrape l'erreur, s'il y en a une (celle préparée par le default)
catch(error){
    // instructions pour l'erreur
    alert(error);
}
// et enfin, quoi qu'il arrive fait ceci... "finally" = finalement, en français
finally{
    // instructions qu'on soit passé par le try ou le catch
    alert('merci d\'avoir joué')
}
//-----------------------------------------------------------------------------------
// boucle DO...WHILE
// do = faire
// while = tant que

// boucle en 2 étapes
// 1° coder la partie "DO" / Faire
// 2° coder la partie "WHILE" / tant que 
let prenom = prompt("Quel est votre prénom ?");
do{
    prenom = prompt("Quel est votre prénom ?");
}
    // tant que prenom est vide j'exécute le DO
while(prenom == ""){
    // dès que je sors de la condition du while, alors je fais...
    alert("Bonjour " + prenom);
}