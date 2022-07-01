const { Country } = require("../config/database.config");

// todo: Get all countries
const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.findAll();
    if (countries.length === 0) {
      return res.status(404).json({
        message: "No countries found",
      });
    }
    return res.status(200).json({
      message: "Countries found",
      data: countries,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while getting countries",
      error: error.message,
    });
  }
};

// todo: Get country by id
const getCountryById = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }
    return res.status(200).json({
      message: "Country found",
      data: country,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while getting country",
      error: error.message,
    });
  }
};

// todo: Create country
const createCountry = async (req, res) => {
  try {
    await Country.create(req.body);
    return res.status(201).json({
      message: "Successfully created country",
      data: "Country created",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while creating country",
      error: error.message,
    });
  }
};

// todo: Update country
const updateCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }
    await country.update(req.body);
    return res.status(200).json({
      message: "Successfully updated country",
      data: "Country updated",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while updating country",
      error: error.message,
    });
  }
};

// todo: Delete country
const deleteCountry = async (req, res) => {
  try {
    const country = await Country.findByPk(req.params.id);
    if (!country) {
      return res.status(404).json({
        message: "Country not found",
      });
    }
    await country.destroy();
    return res.status(200).json({
      message: "Successfully deleted country",
      data: "Country deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Error occured while deleting country",
      error: error.message,
    });
  }
};

// todo: Export controllers
module.exports = {
  getAllCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
};
