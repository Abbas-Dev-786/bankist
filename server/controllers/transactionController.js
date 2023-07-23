const Transaction = require("./../models/transactionModel");
const User = require("../models/userModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("../utils/AppError");

module.exports.getTransactions = catchAsync(async (req, res, next) => {
  const transactions = await Transaction.find({
    $or: [{ to: req.user.id }, { from: req.user.id }],
  });

  res.status(200).json({
    status: "success",
    results: transactions.length,
    data: { ...transactions },
  });
});

module.exports.createTransaction = catchAsync(async (req, res, next) => {
  const { to, amount, type } = req.body;

  const sendToUser = await User.findById(to);

  if (sendToUser && !sendToUser.isActive) {
    return next(
      new AppError(
        "the user you are trying to send/recieve money does not exists"
      )
    );
  }

  if (req.user.balance < amount) {
    return next(new AppError("You dont't have enough balance"));
  }

  const transaction = await Transaction.create({
    to,
    amount,
    type,
    from: req.user.id,
  });

  const toEntry = await User.findByIdAndUpdate(
    to,
    {
      balance: sendToUser.balance + amount,
    },
    { runValidators: true }
  );

  const fromEntry = await User.findByIdAndUpdate(
    req.user.id,
    {
      balance: req.user.balance + amount,
    },
    { runValidators: true }
  );

  res.status(201).json({
    status: "success",
    data: { ...transaction },
  });
});
