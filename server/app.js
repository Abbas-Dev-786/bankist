const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const AppError = require("./utils/AppError");
const globalErrorHandler = require("./controllers/errorController");
const router = require("./routes/userRoutes");

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/auth", router);

app.all("*", (req, res, next) => {
  next(new AppError(`The route ${req.originalUrl} does not exists`));
});

app.use(globalErrorHandler);

module.exports = app;
