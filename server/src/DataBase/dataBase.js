const { Sequelize } = require("sequelize");
require("dotenv").config();
const phraseModel = require("../Models/phraseModel");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false,
  }
);

phraseModel(sequelize);
const { Phrase } = sequelize.models;
module.exports = { sequelize, ...sequelize.models };
