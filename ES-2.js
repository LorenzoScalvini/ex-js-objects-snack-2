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

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// console.log(hamburger.ingredients[0]) stamperà "Salad"
// console.log(secondBurger.ingredients[0]) stamperà "Salad"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// Sono stati creati 3 oggetti in memoria:
// 1. L'oggetto principale hamburger
// 2. L'oggetto secondBurger (creato con lo spread operator {...hamburger})
// 3. L'array ingredients (che è condiviso tra i due oggetti)

// Spiegazione:
// Lo spread operator {...hamburger} crea una copia superficiale (shallow copy) dell'oggetto.
// Ciò significa che vengono copiate solo le proprietà di primo livello, ma gli oggetti annidati
// (come l'array ingredients) vengono copiati per riferimento.

// Quindi, quando modifichiamo secondBurger.ingredients[0] = "Salad", stiamo modificando lo stesso
// array a cui fa riferimento anche hamburger.ingredients.

// È importante notare la differenza tra:
// - secondBurger.ingredients[0] = "Salad" (modifica un elemento dell'array condiviso)
// - secondBurger.ingredients = ["nuovo", "array"] (creerebbe un nuovo array separato)
