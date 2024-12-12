

let playerScore=0;          //Initial player score
let computerScore=0;        //Initial computer score

for(let i =1; i<=5;i++){

    const randomValue=Math.random(); //Generate random value

if (randomValue<0.33){

    console.log("Computer entered: paper");
}
else if(randomValue<0.66){
    console.log("Computer entered: rock");
}
else{
    console.log("Computer entered: scissors");
}

//Takes input and prints it.
let input=prompt("Enter the Word (rock,paper,scissor)-");
console.log("You entered: "+ input);

if(input==="rock"||input==="Rock"||input=="paper"||input=="Paper"||input=="scissors"||input=="Scissors"||input=="scissor"||input=="Scissor"){

//----------Checking for Rock----------- 
    if(input=="rock"){

        if( randomValue<0.33){
        console.log("you lose");
    
    
    
        computerScore=computerScore+1;
        }
    
        else if(randomValue<0.66){
        console.log("It's a tie");
        }
    
        else{
        console.log("You win!");
        playerScore=playerScore+1;
       
        }
    
    }


    //----------Checking for paper-------
    if(input=="paper"||input=="Paper"){

        if( randomValue<0.33){
        console.log("It's a tie");
        }
    
        else if(randomValue<0.66){
        console.log("You win!");
        playerScore=playerScore+1;
        }
    
        else{
        console.log("You lose!");
        computerScore=computerScore+1;
       
        }
    
    }


    //----------Checking for scissor-------

    if(input=="scissor"||input=="Scissor"){

        if( randomValue<0.33){
        console.log("You win!");
        playerScore=playerScore+1;

        }
    
        else if(randomValue<0.66){
        console.log("You lose!");
        computerScore=computerScore+1;

        }
    
        else{
        console.log("It's a tie");
       
        }
    }
}



else{
alert("Enter proper Word!"); 
 
 i=i-1;
}



}
//Prints final score
console.log("Your Score:"+playerScore);
console.log("Computer Score: "+computerScore);
if(playerScore>computerScore){
    console.log("You won the Game!")
}
else if (playerScore===computerScore){
    console.log("The game ended with a tie.")
}
else{
    console.log("You lost the Game!")
    
}
