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
function deepCopy(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copy = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (typeof obj[key] === 'function') {
        copy[key] = obj[key];
      } else {
        copy[key] = deepCopy(obj[key]);
      }
    }
  }

  return copy;
}
const chefCopy = deepCopy(chef);

chefCopy.name = 'Chef Lalafell';
chefCopy.restaurant.name = "Lalafell's Diner";
chefCopy.restaurant.address.number = 456;
chefCopy.makeBurger(2);
chefCopy.restaurant.welcomeClient();
chefCopy.restaurant.address.showAddress();

console.log('Oggetto originale chef:', chef);
console.log("Copia dell'oggetto chef:", chefCopy);
