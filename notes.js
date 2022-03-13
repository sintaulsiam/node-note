const fs = require("fs");
const chalk = require("chalk");
const { title } = require("process");

const getNotes = function () {
  return fs.readFileSync("notes.txt", "utf8");
};

const listNotes = function () {
  const notes = loadNotes();
  console.log(chalk.bgRed("Your notes:"));

  notes.forEach((element) => {
    console.log(element.title);
  });
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  const duplicateNote = notes.find((n) => n.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    console.log(chalk.bgGreen("Note added"));
  } else {
    console.log(chalk.bgRed("note title taken"));
  }
  saveNotes(notes);
};

const removeNote = function (title) {
  const notes = loadNotes();
  const notesToKeep = notes.filter((n) => n.title !== title);
  saveNotes(notesToKeep);
  notes.length > notesToKeep
    ? console.log(chalk.bgGreen("Note removed: " + title))
    : console.log(chalk.bgRed("No note found to remove"));
};

const readNote = function (title) {
  notes = loadNotes();
  noteToRead = notes.find((n) => n.title === title);
  if (!noteToRead) {
    console.log(chalk.bgRed("No node found to read"));
    return;
  }
  console.log(chalk.bgRed(noteToRead.title));
  console.log(noteToRead.body);
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
  getNotes,
  addNotes,
  removeNote,
  listNotes,
  readNote,
};
