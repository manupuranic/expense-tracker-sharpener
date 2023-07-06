const Expense = require("../models/expense");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenses = await Expense.findAll();
    res.json(expenses);
  } catch (err) {
    console.log(err);
  }
};

exports.addExpense = async (req, res, next) => {
  try {
    const resData = await Expense.create({
      amount: req.body.amount,
      desc: req.body.desc,
      category: req.body.category,
    });
    res.json(resData.dataValues);
  } catch (err) {
    console.log(err);
  }
};

exports.deleteExpense = async (req, res, next) => {
  const expId = req.params.id;
  console.log(expId);
  try {
    const exp = await Expense.findByPk(expId);
    exp.destroy();
    res.json({
      message: "expense deleted",
    });
  } catch (err) {
    console.log(err);
  }
};

exports.editExpense = async (req, res, next) => {
  const id = req.params.id;
  const updatedAmount = req.body.amount;
  const updatedDesc = req.body.desc;
  const updatedCategory = req.body.category;
  await Expense.update(
    {
      amount: updatedAmount,
      desc: updatedDesc,
      category: updatedCategory,
    },
    { where: { id: id } }
  );
  res.json({
    message: "Updated expense",
  });
};
