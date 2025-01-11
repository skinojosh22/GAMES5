let cartQuantity = 0;

if (15>=17) {
  console.log('Hello world');
} else {
 console.log('You failed'); 
};

if (5+5<=10) {
  console.log('You win')
} else {
 console.log('You lose')
}

//Rock paper scissors game starts 
let score = JSON.parse( localStorage.getItem('stores')) || {
  wins: 0,
  losses: 0, 
  ties: 0
}

function functionGame() {
const randomNumber = Math.random();
  let computerName ='';
   if (randomNumber >=0 && randomNumber<1/3){
   computerName = 'rock';
   } else if (randomNumber >=1/3 && randomNumber <2/3){
   computerName = 'paper';
   } else if (randomNumber >=2/3 && randomNumber < 1){
   computerName = 'scissors';
   };
   
   return computerName;
}
function playGame(playermove) {
  const computerName = functionGame();
  let result = '';
  if (playermove === 'rock') {
      
   if(computerName === 'rock'){
   result = 'Tie.'
   } else if (computerName === 'paper'){
   result = 'You lose.';
   } else if (computerName === 'scissors'){
   result = 'You win.'
   }
   
  } else if (playermove === 'paper') {
    if(computerName === 'rock'){
   result = 'You win.'
   } else if (computerName === 'paper'){
   result = 'Tie.';
   } else if (computerName === 'scissors'){
   result = 'You lose.'
   }
  } else if (playermove === 'scissors') {
    if(computerName === 'rock'){
   result = 'You lose.'
   } else if (computerName === 'paper'){
   result = 'You win.';
   } else if (computerName === 'scissors'){
   result = 'Tie.'
   }
  }
  if (result === 'You win.') {
    score.wins += 1
  } else if (result === 'You lose.') {
    score.losses +=1
  } else if (result === 'Tie.') {
    score.ties +=1
  }
  
  localStorage.setItem('stores', JSON.stringify(score));
  
  alert(`You picked ${playermove}. Computer picked ${computerName}. ${result}
  Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`);
};

//Rock paper scissors game ends here

//Hour checking starts here
function hourChecking(){
  const timeCheck = Math.random(0 & 24);
  
  if (timeCheck>=0 && timeCheck <=1/3){
  console.log('Good morning');
  } else if (timeCheck >=1/3 && timeCheck <=2/3){
  console.log('Good afternoon');
  } else if (timeCheck >=2/3 && timeCheck <=24){
  console.log('Good evening');
  };
};
// Hour checking ends here