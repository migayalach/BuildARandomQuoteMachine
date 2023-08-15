const SUCCESS = 200;
const ERROR = 400;
const { postPhrase, getPhrase } = require("../Controllers/phraseControllers");

const postPhraseHandler = async (request, response) => {
  const { message, author } = request.body;
  try {
    const phrase = await postPhrase(message, author);
    response.status(SUCCESS).json(phrase);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

const getPhraseHandler = async (request, response) => {
  const { id } = request.params;
  try {
    const phrase = await getPhrase(+id);
    response.status(SUCCESS).json(phrase);
  } catch (error) {
    response.status(ERROR).json({ error: error.message });
  }
};

module.exports = { postPhraseHandler, getPhraseHandler };
