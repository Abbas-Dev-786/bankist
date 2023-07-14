const catchAsync = (fn) => {
  return (req, res, next) => {
    try {
      fn(req, res, next);
    } catch (error) {
      netc(error.message);
    }
  };
};

module.exports = catchAsync;
