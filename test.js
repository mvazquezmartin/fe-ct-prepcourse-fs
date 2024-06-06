function defineSuit(card) {
  const obj = {
    "♣" : "clubs",
    "♦" : "diamonds",
    "♥" : "hearts",
    "♠" : "spades"    
  }
  
  return obj[card[card.length - 1]]
}

console.log(defineSuit('10♠'))