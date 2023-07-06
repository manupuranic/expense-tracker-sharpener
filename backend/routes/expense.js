const express = require("express");
const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.get("/", expenseController.getExpenses);

router.post("/add-expense", expenseController.addExpense);

router.delete("/delete-expense/:id", expenseController.deleteExpense);

router.post("/edit-expense/:id", expenseController.editExpense);

module.exports = router;
