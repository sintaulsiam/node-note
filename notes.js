const fs = require("fs");

const getNotes = function () {
  return fs.readFileSync("notes.txt", "utf8");
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  notes.push({
    title,
    body,
  });

  saveNotes(notes);
};

const saveNotes = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
};
