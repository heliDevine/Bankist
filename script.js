'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">   
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
      `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
displayMovements(account1.movements);

const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance} EUR`;
};
calcDisplayBalance(account1.movements);

const createUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map(word => word[0])
      .join('');
  });
};
createUserName(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/// ARRAY METHODS

// let arr = ['a', 'b', 'c', 'd', 'e'];

// console.log(arr.slice(2, 4));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());

// arr.splice(-1);
// console.log(arr.splice(1, 2));
// console.log(arr);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// console.log(letters.join(' - '));

// const arr3 = [23, 11, 64];

// console.log(arr3[0]);
// console.log(arr3.at(0));

// getting the last element
// console.log(arr3[arr3.length - 1]);
// console.log(arr3.slice(-1)[0]);

// console.log(arr3.at(-1));
// at method also works with strings
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// }

// forEach is higher order function which needs callback function to know "what to do"
// here it receves each movement as an argument
// movements.forEach(function (movement, i, a) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1} You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
//   }
// });
/// forEach method, order matters, first parameter is the current value, second is the index, last is the array. Above in for of loop, the first elemebt is the one is the index and second one is the current value
// you cannot break from the forEach, if you need to break out- use for of loop.

// also works with Maps

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key} : ${value}`);
// });

// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${_} : ${value}`);
// });

// Sets set doesn't have key or index

// CODING CHALLENGE

// const checkDogs = function (juliasDogs, katesDogs) {
//   const juliasDogsAmended = juliasDogs.slice(1, -2);
//   const allDogs = [...juliasDogsAmended, ...katesDogs];
//   allDogs.forEach(function (dogAge, i) {
//     if (dogAge > 3) {
//       console.log(`Dog number ${i + 1} is an adult and is ${dogAge} old`);
//     } else {
//       console.log(`Dog number ${i + 1} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// CODING challenge 2

const calcAverageHumanAge = function (ages) {
  // using ternary operator with map function
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  console.log(humanAges);

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

/// MAP
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// this is more in align of functional programming, so it's preferrec.
const movementsUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});

// nice clean way of writing one line functions (no functon key word or return key word)

const movementsUSD2 = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);
console.log(movementsUSD2);

// this is not ideal way of solving this
const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
// console.log(movementUSDfor);

// map has access to all three parameters
// map returns new array

const movementsDetails = movements.map(
  (movement, i) =>
    `Movement ${i + 1} : You ${
      movement > 0 ? 'deposited' : 'withdrew'
    }  ${Math.abs(movement)}`
);
// console.log(movementsDetails);

// filter method returns boolean value
const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// arrow function below is returned:

const withdrawals = movements.filter(mov => mov < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);

// for loop cannot be chained like array methods
const depositsFor = [];

for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const balance = movements.reduce((acc, cur, i, arr) => acc + cur, 0);

console.log(balance);

// maximum value // comparing if next current value is larger than accumulator value, starting point is not 0
// but value that is at the first position.

const maximum = movements.reduce((acc, cur) => {
  if (acc > cur) return acc;
  else return cur;
}, movements[0]);
console.log(maximum);
