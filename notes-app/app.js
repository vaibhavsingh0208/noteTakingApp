const yargs = require('yargs');
const note = require('./notes.js');

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note Body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argsv => {
    note.addNotes(argsv.title, argsv.body);
  }
});

yargs.command({
  command: 'remove',
  describe: 'Remove note',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: argsv => {
    note.removeNotes(argsv.title);
  }
});

yargs.command({
  command: 'read',
  describe: 'Reading a note',
  handler: () => {
    console.log('Reading a note');
  }
});

yargs.command({
  command: 'list',
  describe: 'Listing all note',
  handler: () => {
    note.listNotes();
  }
});

yargs.parse();
