'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order() {
    return [this.starterMenu[this.starterMenu], this.mainMenu[mainIndex]];
  },

  orderDelivery({ staterIndex, mainIndex, time, address }) {
    console.log(
      `Order received! ${this.starterMenu[staterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}}`
    );
  },

  // method to order pasta
  orderPasta(ing1, ing2, ing3) {
    console.log(`${ing1}, ${ing2}, ${ing3}`);
  },
};

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   staterIndex: 2,
// });
// const nested = [2, 4, [5, 6]];

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

// console.log(restaurantName, hours, tags);

// // setting values to [] instead of undefined
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // Mutating varables
// let a = 111;
// let b = 99;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// // nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Spread operator

// const arr = [7, 8, 9];

// // ES6 - spread operator takes out values from arr and SPREADS them out individually
// const newArr = [1, 2, ...arr];

// console.log(...newArr);

// // square brackets we are adding Gnocci to the mainMenu area
// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 array
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];

// console.log(menu);

// // Example
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// let players1 = game.players[0];
// let players2 = game.players[1];

// const { players1: gk = ['Neuer'], ...fieldPlayers } = players1;

// const allPlayers = [...players1, ...players2];

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];

// const printGoals = function (...numOfPlayers) {
//   console.log(numOfPlayers);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// console.log(gk, fieldPlayers, allPlayers, players1Final);

// 1.
// const [players1, players2] = game.players;

// // 2.
// const [gk, ...fieldPlayers] = players1;

// // 3.
// const allPlayers = [...players1, ...players2];

// // 4.
// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// // 5.
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);

// // 6.
// const printGoals = function (...numOfPlayers) {
//   console.log(numOfPlayers);
//   console.log(`${numOfPlayers.length} goals were scored!`);
// };

// // printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// // printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// -----------------------------------------------------------------

// Looping arrays: The for-of loop

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
// }

// for (let i = 0; i < 10; i++) {
//   console.log(i + 1);
// }

// -----------------------------------------------------------------

// Looping Objects: Object Keys, Values, Entries

// const properties = Object.keys(openingHours);

// property NAMES
// const properties = Object.keys(hours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// // Property VALUES
// const values = Object.values(hours);
// console.log(values);

// // Entire object

// const entries = Object.entries(hours);
// // console.log(entries);
// // use to loop over object - now we have each key and value pair

// // [key, value]
// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }
// Entries are names plus values together

for (let i = 0; i < game.scored.length; i++) {
  console.log(`Goal ${i + 1}: ${game.scored[i]}`);
}

const values = Object.values(game.odds);
console.log(values);

// const average = (values[0] + values[1] + values[2]) / 3;
// console.log(average);

let sum = 0;
let average = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
  average = sum / 3;
}
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
