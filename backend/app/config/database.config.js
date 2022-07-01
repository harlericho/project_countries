const Sequelize = require("sequelize");
const countryModel = require("../models/country.model");
const sequelize = new Sequelize(
  process.env.DB_SCHEMA,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  }
);
const Country = countryModel(sequelize, Sequelize);
sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Database and tables created!");
  })
  .catch((error) => {
    console.log(error);
  });

// todo: Export sequelize of country
module.exports = {
  Country,
};
