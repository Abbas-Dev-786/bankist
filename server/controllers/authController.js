const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/AppError");

const signToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

const createSendToken = (res, statusCode, user) => {
  const token = signToken(user.id);

  res.cookie("access_token", token, {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    secure: process.env.NODE_ENV === "prod",
  });

  user.password = undefined;

  res.status(statusCode).json({ status: "success", data: { user, token } });
};

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

  res.status(201).json({ status: "success" });
});

module.exports.login = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(new AppError("Please provide username and password!", 400));
  }

  const user = await User.findOne({ username }).select("+password");

  if (!user || !(await user.comparePassword(password, user.password))) {
    return next(new AppError("invalid credentials", 400));
  }

  if (!user.isActive) {
    return next(new AppError("user does not exists"));
  }

  createSendToken(res, 200, user);
});

module.exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access.", 401)
    );
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const currentUser = await User.findById(decoded.id);
  if (!currentUser || !currentUser.isActive) {
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );
  }

  req.user = currentUser;
  next();
});
