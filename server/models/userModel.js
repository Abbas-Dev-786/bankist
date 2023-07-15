const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { isEmail } = require("validator");

// const ROLES = { user: "user", manager: "manager", admin: "admin" };

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "user must have firstName"],
    },
    lastName: {
      type: String,
      trim: true,
      required: [true, "user must have lastName"],
    },
    email: {
      type: String,
      trim: true,
      validate: [isEmail, "enter valid email address"],
      unique: [true, "email must be unique"],
      required: [true, "user must have email"],
    },
    username: {
      type: String,
      trim: true,
      unique: [true, "username must be unique"],
      required: [true, "user must have password"],
    },
    password: {
      type: String,
      trim: true,
      select: false,
      maxLength: [4, "Password should be 4 characters long"],
      required: [true, "user must have password"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    balance: {
      type: Number,
      min: 0,
      default: 0,
    },
    // role: {
    //   type: String,
    //   enum: {
    //     values: Object.values(ROLES),
    //     message: `Role can be either ${Object.values(ROLES).join(", ")}`,
    //   },
    //   default: ROLES.user,
    // },
  },
  { timestamps: true }
);

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

userSchema.methods.comparePassword = async function (
  enteredPassword,
  storedPassword
) {
  return await bcrypt.compare(enteredPassword, storedPassword);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
