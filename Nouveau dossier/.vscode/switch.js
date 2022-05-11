//permet de définir plusieurs cas/scénario (et de donner des instructions pour chacun)
//permet de gérer un cas par défaut (et de donner des instructions de base)

//------------------------------EXEMPLE de switch--------------------------------

//j'annonce un switch avec un paramètre, ici il s'appelle : "consommable", pour l'exemple
switch(consommable){
    // je vais coder les différents cas de ce système de conditions
    // cas 1
    case "carotte": 

    // cas 2
    case"carotte": 
                    // Ici, les 3 premiers cas prennent les mêmes instructions (ceux du cas 3)
    // cas 3
    case"pomme de terre":
        // instruction du cas 3...
        console.log("ceci est un légume");
        // le break signifie qu'on sort de la condition si l'on a un des cas précédent
        break;

    // cas 4
    case"banane": 
        console.log("ceci est un fruit");
        // break nécessaire pour dire que si l'on erntre dans cette condition, alors on applique les instructions
        // puis l'on quitte la condition switch
        break; 

    // gestion des cas par défaut 
    default:
        //instructons du cas par défaut
        console.log('ceci n\'est ni un fruit ni un légume !')
}