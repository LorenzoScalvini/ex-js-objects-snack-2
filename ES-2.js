//ES 2
const hamburger = {
  name: 'Cheese Burger',
  weight: 250,
  ingredients: ['Cheese', 'Meat', 'Bread', 'Tomato'],
};

const secondBurger = { ...hamburger };
secondBurger.ingredients[0] = 'Salad';

console.log(hamburger.ingredients[0]); // ?
console.log(secondBurger.ingredients[0]); // ?

//Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//console.log(hamburger.ingredients[0]) stamperà "Salad"
//console.log(secondBurger.ingredients[0]) stamperà "Salad"

//Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
//L'oggetto principale hamburger
//L'oggetto secondBurger (creato con lo spread operator)
//L'array ingredients (che è condiviso tra i due oggetti)
