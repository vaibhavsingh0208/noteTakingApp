const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length) {
    console.log(`Notes '${title}' taken!`);
  } else {
    notes.push({ title, body });
    saveNotes(notes);
  }
};

const removeNotes = title => {
  const notes = loadNotes();
  const notesToPreserve = notes.filter(note => note.title !== title);
  if (notesToPreserve.length) {
    saveNotes(notesToPreserve);
  }
  if (notes.length === notesToPreserve.length) {
    console.log(chalk.red.inverse(`No such '${title}' note present`));
  } else {
    console.log(chalk.green.inverse(`Note '${title}' removed`));
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.inverse('Your Notes'));

  notes.forEach(note => {
    console.log(note.title);
  });
};

const saveNotes = notes => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = { getNotes: getNotes, addNotes: addNotes, removeNotes: removeNotes, listNotes: listNotes };
