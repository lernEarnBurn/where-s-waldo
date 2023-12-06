const sqlite3 = require('sqlite3').verbose();

const levelsDb = new sqlite3.Database('./db/levels.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


const playersDb = new sqlite3.Database('./db/players.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});


module.exports = {levelsDb, playersDb}
