let nom=document.querySelector('#nom');
let prenom=document.querySelector('#prenom');
let age=document.querySelector('#age');
let email=document.querySelector('#email');
let Adresse=document.querySelector('#Adresse');
let titre=document.querySelector('#titre');
let titre1=document.querySelector('#titre1');
let titre2=document.querySelector('#titre2');
let titre3=document.querySelector('#titre3');
let objectif=document.querySelector('#obj');
let car=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
let carrr=[' ','0','1','2','3','4','5','6','7','8','9','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

document.getElementById("b").onclick = function() {
    isupper();
    isUper();
    bonage();
    bonemail();
    
};

function existcar (str,car){
	for (let i = 0; i < str.length; i++) {
		if(car.includes(str[i])==false){
			return false
		}
	}
	return true
}
function isupper(){
    if ( existcar(nom.value,car)==false) {
        alert("format non acceptéa");   
    }
    else if (nom.value!=nom.value.toUpperCase()) {
        alert("le nom doit etre en majuscule");

    }
       
};
function isUper(){
    if ( existcar(prenom.value,car)==false) {
        document.getElementById("#prnm").innerHTML="hay" 
    }
    else if (prenom.value.charAt(0)!=prenom.value.charAt(0).toUpperCase() || prenom.value.slice(1)!=prenom.value.slice(1).toLowerCase() ) {
        alert("le prenom doit etre en majuscule");   
        
        }
};
function bonage(){
    
    if ( age.value < 18) {
        alert("l'age minimal est 18");
    }

}
function bonemail (){
	let parts=email.value.split('@');
    let parrts=parts[1].split('.');
    let clearparts=[parts[0],parrts[0],parrts[1]];
	if(clearparts[2]!="com" && clearparts[2]!="fr"){
        alert("email invalid");
    }
}
