//ES 1
const hamburger = { name: 'Cheese Burger', weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;
console.log(hamburger.name); // ?
console.log(secondBurger.name); // ?

// La prima console.log(hamburger.name) stamperà "Double Cheese Burger"
// La seconda console.log(secondBurger.name) stamperà "Double Cheese Burger"

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice?
// È stato creato un solo oggetto in memoria.
// Quando facciamo secondBurger = hamburger, non stiamo creando un nuovo oggetto,
// ma stiamo facendo puntare secondBurger allo stesso oggetto a cui punta hamburger.
// Quindi tutte le modifiche fatte tramite secondBurger si riflettono anche su hamburger,
// perché entrambi puntano allo stesso oggetto.
