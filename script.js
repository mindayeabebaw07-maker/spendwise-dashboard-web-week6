const APP_NAME = "SpendWise";
let userName = prompt("Welcome to SpendWise! What is your name?");
let monthlyBudget = Number(prompt("Hi " + userName + ", what is your monthly budget?"));
let foodExpense = Number(prompt("How much did you spend on Food?"));
let transportExpense = Number(prompt("How much did you spend on Transport?"));
let rentExpense = Number(prompt("How much did you spend on Rent?"));
let entertainmentExpense = Number(prompt("How much did you spend on Entertainment?"));
let utilitiesExpense = Number(prompt("How much did you spend on Utilities?"));

function calculateTotalExpenses(food, transport, rent, entertainment, utilities) {
  return food + transport + rent + entertainment + utilities;
}
function calculateBalance(budget, total) {
  return budget - total;
}
function calculatePercentageSpent(total, budget) {
  return (total / budget) * 100;
}
function getBudgetStatus(balance) {
  if (balance < 0) {
    return "OVER BUDGET! You spent more than your budget.";
  } else if (balance === 0) {
    return "You used exactly your budget.";
  } else {
    return "You are within budget. Good job!";
  }
}

let totalExpenses = calculateTotalExpenses(foodExpense, transportExpense, rentExpense, entertainmentExpense, utilitiesExpense);
let remainingBalance = calculateBalance(monthlyBudget, totalExpenses);
let percentSpent = calculatePercentageSpent(totalExpenses, monthlyBudget);
let status = getBudgetStatus(remainingBalance);

console.log("===== " + APP_NAME + " REPORT =====");
console.log("User: " + userName);
console.log("Monthly Budget: Ksh " + monthlyBudget);
console.log("Total Expenses: Ksh " + totalExpenses);
console.log("Remaining Balance: Ksh " + remainingBalance);
console.log("Percentage Spent: " + percentSpent.toFixed(1) + "%");
console.log("Status: " + status);

document.getElementById("result").innerHTML =
  "<h3>Hello " + userName + "</h3>" +
  "<p><strong>Budget:</strong> Ksh " + monthlyBudget + "</p>" +
  "<p><strong>Total Spent:</strong> Ksh " + totalExpenses + "</p>" +
  "<p><strong>Remaining:</strong> Ksh " + remainingBalance + "</p>" +
  "<p><strong>Status:</strong> " + status + "</p>";
