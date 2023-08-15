const { Phrase } = require("../DataBase/dataBase");
const { clearObj } = require("../Utils/phraseUtil");

const postPhrase = async (message, author) =>
  await Phrase.create({ message, author });

const getPhrase = async (id) => {
  if (!isNaN(id)) {
    const amount = await Phrase.count();
    if (id <= amount && id > 0) {
      const phraseObj = await Phrase.findOne({ where: id });
      return clearObj(phraseObj);
    }
  }
  throw Error`Error`;
};

module.exports = { getPhrase, postPhrase };
