//JS - DOM test response
console.log("JS OK");

/*  Declaring array variable "fridge" */
let fridge = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];
/* array "fridge" value check */
console.log("Stato iniziale del frigo:" + " " + fridge);


/*  Adding "peach" value to the "fridge" array variable */
fridge.push('pesca'); 
/* Array "fridge" value check after push method */
console.log("Frigo con valore pesca aggiunto" + " " + fridge); 

/* Declaring support boolean variable */
let checkingCocomero = false;

/* Checking 'cocomero' value presence in the "fridge" array */
for (let i = 0; i < fridge.length && !checkingCocomero; i++) { 
  if (fridge[i] === 'cocomero') {
    checkingCocomero = true;
  }
}

/* Printing related message to value 'cocomero' presence */
if (checkingCocomero) {
  console.log("Il cocomero nel frigo c'è (non commenterò i tuoi dubbi gusti sui cocktail)");
} else {
  console.log("Mi dispiace, il cocomero non è nel frigo (e per fortuna aggiungerei!)");
}