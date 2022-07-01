const { check } = require("express-validator");

const { validateHelper } = require("../helpers/country.helper");
const validateCountry = [
  check("name")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isLength({ min: 5, max: 50 })
    .withMessage("Name must be between 5 and 50 characters"),
  check("code")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Code is required")
    .isInt()
    .withMessage("Code must be an integer"),
  check("continent")
    .exists()
    .not()
    .isEmpty()
    .withMessage("Continent is required")
    .isLength({ min: 5, max: 20 })
    .withMessage("Continent must be between 5 and 20 characters"),
  (req, res, next) => validateHelper(req, res, next),
];

// todo: Export validateCountry
module.exports = {
  validateCountry,
};
