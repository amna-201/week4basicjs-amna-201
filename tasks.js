// Task 1
function checkVotingEligibility() {
function checkVotingEligibility(age) {
  if (age >= 18) {
    console.log("You are eligible for voting.");
  } else {
    console.log("You are not eligible for voting.");
  }
}
}

// Task 2
function printNumbersWithWhile() {
 let i = 1;
  while (i <= 5) {
    console.log(i);
    i++;
  }
}

// Task 3
function printEvenNumbersWithFor() {
 for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}

// Task 4
function getDayOfWeek() {
switch (day) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("weekend");
  }
}

// Task 5
function sum() {
  return num1 + num2;
}

// Task 6
//Uncomment and solve
function arrFruits() {
  const fruits = ['apple', 'banana', 'orange','chocolate'];
  fruits.forEach(fruit => {
    console.log(fruit);
  });
}

module.exports = {
  checkVotingEligibility,
  printNumbersWithWhile,
  printEvenNumbersWithFor,
  getDayOfWeek,
  sum,
  fruits,
};
