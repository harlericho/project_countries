const { validationResult } = require("express-validator");

const validateHelper = (req, res, next) => {
  try {
    validationResult(req).throw();
    return next();
  } catch (error) {
    return res.status(403).json({
      message: error.array()[0].msg,
    });
  }
};

// todo: Export validateHelper
module.exports = {
  validateHelper,
};
