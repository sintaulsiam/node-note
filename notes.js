const fs = require("fs");

const getNotes = function () {
  return fs.readFileSync("notes.txt", "utf8");
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNotes = notes.filter((n) => n.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    console.log("Note added");
  } else {
    console.log("note title taken");
  }

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
