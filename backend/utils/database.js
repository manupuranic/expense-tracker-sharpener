const sequelize = require("sequelize");

const Sequelize = new sequelize("expense-tracker", "root", "root2000", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = Sequelize;
