const levelsDb = require('./dbConfig.js').levelsDb
const playersDb = require('./dbConfig.js').playersDb


// SQLite commands to drop 'players' and 'levels' tables
const dropPlayersTable = 'DROP TABLE IF EXISTS players;';
const dropLevelsTable = 'DROP TABLE IF EXISTS levels;';

// Execute the commands
playersDb.serialize(() => {
  playersDb.run(dropPlayersTable, (err) => {
    if (err) {
      console.error('Error dropping players table:', err.message);
    } else {
      console.log('Dropped players table.');
    }
  });
});

// Close the database connection
playersDb.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});


levelsDb.serialize(() => {
  levelsDb.run(dropLevelsTable, (err) => {
    if (err) {
      console.error('Error dropping players table:', err.message);
    } else {
      console.log('Dropped players table.');
    }
  });
});

levelsDb.close((err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('Closed the database connection.');
});

