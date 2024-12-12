const randomValue=Math.random(); //Generate random value

if (randomValue<0.33){

    console.log("paper");
}
else if(randomValue<0.66){
    console.log("rock");
}
else{
    console.log("scissors");
}


let playerScore=0;          //Initial player score
let computerScore=0;        //Initial computer score

//Takes input and prints it.
const input=prompt("Enter the number");
console.log("you entered "+ input);


//----------Checking for Rock----------- 
if(input=="rock"){

if( randomValue<0.33){
console.log("you lose");

if(playerScore>0) { playerScore=playerScore-1}

computerScore=computerScore+1;
}

else if(randomValue<0.66){
    console.log("It's a tie");
}

else{
    console.log("You win!");
    playerScore=playerScore+1;
    if(computerScore>0) { computerScore=computerScore-1}
}

}

//Prints final score
console.log("Your Score:"+playerScore);
console.log("Computer Score: "+computerScore);