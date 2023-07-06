const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const sequelize = require("./utils/database");
const expenseRouter = require("./routes/expense");

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(cors());

app.use("/expenses", expenseRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(4000, () => {
      console.log("Server is running at port: 4000");
    });
  })
  .catch((err) => console.log(err));
