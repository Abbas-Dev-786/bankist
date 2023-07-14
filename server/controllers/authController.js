const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

module.exports.register = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, username, password, confirmPassword } =
    req.body;

  if (!confirmPassword) {
    return next(new AppError("Please confirm your password", 400));
  }

  if (password !== confirmPassword) {
    return next(new AppError("Password not matching", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    username,
    password,
  });

  res.status(201).json({ status: "success", user });
});

module.exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("invalid credentials", 400));
  }

  if (!user.isActive) {
    return next(new AppError("user does not exists"));
  }

  res.status(200).json({ status: "success", user });
});
