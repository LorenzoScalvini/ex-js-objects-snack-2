// ES 6
const chef = {
  name: 'Chef Hyur',
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log('Benvenuto!');
    },
    address: {
      street: 'Main Street',
      number: 123,
      showAddress: () => {
        console.log('Main Street 123');
      },
    },
    isOpen: true,
  },
};

//Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// Per l'oggetto chef il metodo migliore è lo spread operator: const chefClone = {...chef}
// Perché l'oggetto contiene proprietà primitive (name, age) e funzioni.
