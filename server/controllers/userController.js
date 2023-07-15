const User = require("../models/userModel");
const AppError = require("../utils/AppError");
const catchAsync = require("../utils/catchAsync");

module.exports.ME = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    return next(new AppError("user does not exists", 404));
  }

  res.status(200).json({ status: "success", user });
});

module.exports.updateME = catchAsync(async (req, res, next) => {
  const { firstName, lastName, email, username } = req.body;

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { firstName, lastName, email, username },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError("user does not exists", 404));
  }

  res.status(200).json({ status: "success", user });
});

module.exports.deleteME = catchAsync(async (req, res, next) => {
  const user = await User.findByIdAndUpdate(
    req.user.id,
    { isActive: false },
    { runValidators: true, new: true }
  );

  if (!user) {
    return next(new AppError("user does not exists", 404));
  }

  res.status(204).json({ status: "success" });
});
