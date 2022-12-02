//document.getElementById("count-el").innerText = 5;//DOM: document object model: how you use js to modify your website
// let saveEl = document.getElementById('save-el');
// let countEl= document.getElementById('count-el');

// let count = 0;
// function increment() {
//     count += 1;
//     countEl.textContent = count;
// }

// function save (){
//     let countStr = count + ' - ';
//     saveEl.textContent += countStr;
//     console.log(count);
//     countEl.textContent = 0;
//     count = 0;
// }



 let age = 22;
 if (age < 21){
    console.log("You cannot enter the club!");
 }
 else(console.log("welcome!"));

 let oldAge = 100;
 if (oldAge < 100){
    console.log("Not Eligible");
 }
 else if (oldAge === 100){
    console.log("Here is your birthday card from the king!");
 }
 else (console.log("Not eligible, you have already gotten one!"))

 let firstCard = getRandomCard();
 let secondCard = getRandomCard();
 let cards = [firstCard, secondCard]
 let sum = firstCard + secondCard;
 let hasBlackJack = false;
 let isAlive = true;
 let message = "";
 let Message = document.getElementById("message");
 console.log(Message);
 //let sumEL = document.getElementById("sum-el")
 let sumEL = document.querySelector("#sum-el")
 let cardsEl = document.getElementById("cards-el");

 function getRandomCard() {
   let randomNumber =  Math.floor(Math.random() * 13) + 1;
   return randomNumber
 }

  function startGame() {
    renderGame();
  }

  function renderGame() {
    sumEL.textContent = "Sum: " + sum;
   cardsEl.textContent = "Cards: " ;
    for ( let i = 0; i < cards.length; i++){
        return (cardsEl.textContent += cards[i]);
    }
    if (sum < 21){
        message="Do you want to draw a new card";
        hasBlackJack = true;
    }
     else if (sum === 21){
        message = "You have a blackjack"
     }
     else {
        message = "You're out of the game"
        isAlive = false;
     }
     Message.textContent = message;
  }

  function newCard() {
    console.log("Drawing a new card from the deck");
    let cardDraw = getRandomCard();
    sum+= cardDraw;
    console.log(cards.push(cardDraw));
    renderGame();
  }

