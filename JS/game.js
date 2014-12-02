var choixUtilisateur = prompt("                                           *** GAME *** \nLet's make a choice and win the game to discover me:\nPaper, Rock, Scissors, Lizard or Spock ?");


var choixOrdi = Math.random();

if (choixOrdi < 0.20) {
    choixOrdi = "Rock";
} 

else if(choixOrdi <= 0.40) {
    choixOrdi = "Paper";
}

else if(choixOrdi <= 0.60) {
    choixOrdi = "Lizard";
}

else if(choixOrdi <= 0.80) {
    choixOrdi = "Spock";
} 

else {
    choixOrdi = "Scissors";
} 


alert("I choose : " + choixOrdi);

var comparer = function(choix1, choix2) {
    
    if(choix1 == choix2) {
        return "OoooOooOOH DEUCE ! You can play again with a new choice" ;
       
    }

else if (choix1 == "Rock") {

    if (choix2 == "Scissors") {
        return "Your Rock WIN ! Congrats & Welcome Onboard !";
    }
    else if (choix2 == "Lizard") {
        return "Your Rock WIN ! Congrats & Welcome Onboard !";
    }  
    
    else {
        return choixOrdi + " " + "beat your" + " " + choixUtilisateur + " !" + " YOU LOOSE ! MmmmMm nevertheless you can visit my website ;) ";
    }  
}

else if (choix1 == "Spock") {

    if (choix2 == "Scissors") {
        return "Your Spock WIN ! Congrats & Welcome Onboard !";
    }
    else if (choix2=="Rock") {
        return "Your Spock WIN ! Congrats & Welcome Onboard !";
    }
    
    else {
         return choixOrdi + " " + "beat your" + " " + choixUtilisateur + " !" + " YOU LOOSE ! MmmmMm nevertheless you can visit my website ;) ";
    }   
}
    
else if (choix1 == "Lizard") {

    if (choix2 == "Spock") {
        return "Your spoke WIN ! Congrats & Welcome Onboard !";
    }
    else if (choix2=="Paper") {
        return "Your Lézard WIN ! Congrats & Welcome Onboard !";
    }
    
    else {
         return choixOrdi + " " + "beat your" + " " + choixUtilisateur + " !" + " YOU LOOSE ! MmmmMm nevertheless you can visit my website ;) ";
    } 
}

else if (choix1 == "Paper") {

    if (choix2 == "Rock") {
        return "Your Paper WIN ! Congrats & Welcome Onboard !";
    }
    
    else if (choix2 == "Spock") {
        return "Your Paper WIN ! Congrats & Welcome Onboard !";
    }
    
    else {
         return choixOrdi + " " + "beat your" + " " + choixUtilisateur + " !" + " YOU LOOSE ! MmmmMm nevertheless you can visit my website ;) ";
    }
    
}

else if (choix1 == "Scissors") {

    if (choix2 == "Paper") {
        return "Your Scissors WIN ! Congrats & Welcome Onboard !";
    }
    else if (choix2 == "Lizard") {
        return "Your Scissors WIN ! Congrats & Welcome Onboard !";
    }
    
    else {
         return choixOrdi + " " + "beat your" + " " + choixUtilisateur + " !" + " YOU LOOSE ! MmmmMm nevertheless you can visit my website ;) ";
    }
     
    
}

if (choix1 != "Scissors" || "Paper" || "Rock" || "Lizard" || "Spock") {

        return "Hey, this possibility does'nt exist ;) Take care about the upper case !";
    }
};

    
alert(comparer(choixUtilisateur, choixOrdi));