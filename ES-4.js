const chef = {
  name: 'Chef Hyur',
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
};

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

//Qual è il metodo migliore per clonare l'oggetto chef, e perché?
// Per l'oggetto chef il metodo migliore è lo spread operator: const chefClone = {...chef}
// Perché l'oggetto contiene proprietà primitive (name, age) e una funzione.
// Le funzioni sono passate per riferimento anche con structuredClone, quindi non c'è vantaggio
// nell'usare structuredClone, che inoltre non supporta nativamente la clonazione di funzioni
// e lancerebbe un errore.

//Qual è il metodo migliore per clonare l'oggetto restaurant, e perché?
// Per l'oggetto restaurant il metodo migliore è structuredClone: const restaurantClone = structuredClone(restaurant)
// Perché restaurant contiene oggetti annidati (address) e un oggetto Date.
// structuredClone crea una deep copy, clonando correttamente anche l'oggetto address e l'oggetto Date,
// mentre lo spread operator creerebbe solo una shallow copy, mantenendo i riferimenti agli oggetti annidati.
