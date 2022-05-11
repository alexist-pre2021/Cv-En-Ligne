/*// 0 et 1 ne sont pas des nombres premiers 
let somme  = 0;// sommes a additionner les nombres premiers 
let nbrValeur= 0; // variable qui va stocker les nombres premiers 
let nbrTrouve= "";
// on déclare à partir de 2 et non 1 car ----> (voir commentaire ligne 1 )
for(let i=2;i <=100;i++){
    let trouve = false;
    for(j=2; j<i/2;j++){// obtenir le résultat souhaité
        if(i%j ==0) // si i est divisible sur j, 
        trouve = true;
    } 
    if(trouve == false){// s'il existe aucun de diviseur de i        
    nbrTrouve += i+",";
    nbrValeur+=1;
    somme+=i;
    }
}
document.write(nbrTrouve.substring(0, nbrTrouve.lentgh - 1 ));
document.write(" "+somme+' ');
document.write(" "+(somme/nbrValeur). toFixed(3)+'');*/
// 
let 



