const { Router } = require("express");
const {
  postPhraseHandler,
  getPhraseHandler,
} = require("../Handlers/phraseHandlers");
const phraseRoute = Router();

phraseRoute.post("/", postPhraseHandler);
phraseRoute.get("/:id", getPhraseHandler);

module.exports = phraseRoute;
