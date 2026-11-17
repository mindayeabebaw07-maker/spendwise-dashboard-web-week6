let expenses = [];

function calculateTotalExpenses(allExpenses) {
  let total = 0;
  for (let i = 0; i < allExpenses.length; i++) {
    total += allExpenses[i].amount;
  }
  return total;
}

function calculateBalance(income, total) {
  return income - total;
}

function getBudgetStatus(balance, income) {
  if (balance < 0) {
    return "OVER BUDGET! You spent too much.";
  } else if (balance === 0) {
    return "You used exactly your budget.";
  } else if (balance < income * 0.2) {
    return "Warning: You are almost out of budget.";
  } else {
    return "Great! You are within budget.";
  }
}

document.getElementById("addBtn").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);
  let income = Number(document.getElementById("income").value);

  if (name === "" || amount <= 0 || income <= 0) {
    document.getElementById("result").textContent = "Please fill all fields correctly.";
    return;
  }

  expenses.push({ name: name, amount: amount });

  let total = calculateTotalExpenses(expenses);
  let balance = calculateBalance(income, total);
  let message = getBudgetStatus(balance, income);

  let listHTML = "";
  for (let i = 0; i < expenses.length; i++) {
    listHTML += expenses[i].name + ": " + expenses[i].amount + "<br>";
  }

  // Display results in console - as required
  console.log("===== SpendWise REPORT =====");
  console.log("Income: " + income);
  console.log("Total Expenses: " + total);
  console.log("Remaining Balance: " + balance);
  console.log("Status: " + message);

  document.getElementById("list").innerHTML = listHTML;
  document.getElementById("result").textContent =
    "Total: " + total + " | Balance: " + balance + " | " + message;

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
});
