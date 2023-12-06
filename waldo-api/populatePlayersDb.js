const db = require('./dbConfig.js').playersDb
const isPlayer = require('./models/playerSchema')

// Create 'players' table
db.run(`
  CREATE TABLE IF NOT EXISTS players (
    name TEXT,
    runs TEXT
  )
`);

// Insert sample data
const samplePlayers = [
  { name: 'Player1', runs: [{ level: 'Level1', totalSeconds: 30 }, { level: 'Level2', totalSeconds: 45 }] },
  { name: 'Player2', runs: [{ level: 'Level1', totalSeconds: 25 }, { level: 'Level3', totalSeconds: 50 }] }
];

const insertPlayer = db.prepare('INSERT INTO players (name, runs) VALUES (?, ?)');
samplePlayers.forEach(player => {
  insertPlayer.run(player.name, JSON.stringify(player.runs));
});
insertPlayer.finalize();

// Read and validate data
db.each('SELECT * FROM players', (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  const player = { name: row.name, runs: JSON.parse(row.runs) };
  
  if (isPlayer(player)) {
    console.log('Valid Player:', player);
  } else {
    console.log('Invalid Player:', player);
  }
});

// Close the database connection
db.close();
