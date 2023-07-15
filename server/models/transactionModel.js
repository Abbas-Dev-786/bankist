const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      min: 0,
      required: [true, "transaction must have amount"],
    },
    to: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "transaction must have to"],
    },
    from: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "transaction must have from"],
    },
    type: {
      type: String,
      required: [true, "transaction must have type"],
      enum: {
        values: ["deposit", "widthdrawal"],
        message: "invalid type",
      },
    },
  },
  { timestamps: true }
);
