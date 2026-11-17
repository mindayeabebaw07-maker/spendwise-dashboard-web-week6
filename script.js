let expenses = [];

document.getElementById("addBtn").addEventListener("click", function() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);
  let income = Number(document.getElementById("income").value);

  if (name === "" || amount <= 0 || income <= 0) {
    document.getElementById("result").textContent = "Please fill all fields with valid values.";
    return;
  }

  expenses.push({ name: name, amount: amount });

  let total = 0;
  let listHTML = "";
  for (let i = 0; i < expenses.length; i++) {
    total += expenses[i].amount;
    listHTML += expenses[i].name + ": " + expenses[i].amount + "<br>";
  }

  let balance = income - total;
  let message = "";
  if (balance < 0) {
    message = "OVER BUDGET! You spent too much.";
  } else if (balance === 0) {
    message = "You used exactly your budget.";
  } else if (balance < income * 0.2) {
    message = "Warning: You are almost out of money.";
  } else {
    message = "Great! You are within budget.";
  }

  document.getElementById("list").innerHTML = listHTML;
  document.getElementById("result").textContent =
    "Total: " + total + " | Balance: " + balance + " | " + message;

  document.getElementById("name").value = "";
  document.getElementById("amount").value = "";
});
