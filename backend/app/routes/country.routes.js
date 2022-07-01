const express = require("express");
const router = express.Router();
const country = require("../controllers/country.controller");
const { validateCountry } = require("../validations/country.validation");

// todo: Get of routers
router.get("/", country.getAllCountries);
router.get("/:id", country.getCountryById);
router.post("/", validateCountry, country.createCountry);
router.put("/:id", validateCountry, country.updateCountry);
router.delete("/:id", country.deleteCountry);

// todo: Export routers
module.exports = router;
