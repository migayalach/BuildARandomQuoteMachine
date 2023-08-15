const { Router } = require("express");
const mainRouter = Router();

const phraseRoute = require("./phraseRoute");

mainRouter.use("/phrase", phraseRoute);

module.exports = mainRouter;
