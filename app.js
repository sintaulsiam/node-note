const chalk = require("chalk");
const { title, argv } = require("process");
const { demandOption, strict } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes");

// console.log(chalk.green.bgRed.bold("Sucess"));
// console.log(process.argv);

yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note boday",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "removig a note",
  builder: {
    title: {
      describe: "note title with to remove",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "listing all note",
  handler: function () {
    console.log("listing all note");
  },
});

yargs.command({
  command: "read",
  describe: "reading a note",
  handler: function () {
    console.log("reading the note");
  },
});

yargs.parse();

// console.log(yargs.argv);
