# SpendWise - JavaScript Foundation

## What Your SpendWise Project Does
SpendWise helps users track their monthly budget. It asks for name, budget and expenses, calculates totals and shows remaining balance.

## JavaScript Concepts Implemented
Variables (let, const), Data Types, prompt(), Number(), Functions, Calculations, If/Else, console.log()

## How Variables Are Being Used
const APP_NAME never changes. let userName, monthlyBudget, foodExpense etc. store user input. let totalExpenses, remainingBalance store results.

## How User Input Is Collected
Using prompt() dialogs. Number() converts text to numbers for math.

## How Calculations Are Performed
Total Expenses = Food + Transport + Rent + Entertainment + Utilities
Remaining Balance = Budget - Total Expenses
Percentage Spent = (Total / Budget) * 100

## How Functions Help Organize The Code
calculateTotalExpenses(), calculateBalance(), calculatePercentageSpent(), getBudgetStatus() each do one job so code is reusable and readable.
