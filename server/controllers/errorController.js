const sendDevError = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    name: err.name,
    code: err.code,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.log(err, "💥");
    res.status(500).json({
      status: "fail",
      message: "Something went really wrong 😓",
    });
  }
};

module.exports = (err, req, res, next) => {
  res.statusCode ||= 400;
  res.status ||= "fail";

  if (process.env.NODE_ENV === "dev") {
    sendDevError(err, res);
  } else if (process.env.NODE_ENV === "prod") {
    let error = Object.assign(err);

    sendProdError(error, res);
  }
};
