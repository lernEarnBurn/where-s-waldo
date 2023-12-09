const db = require('./dbConfig.js').playersDb
const isPlayer = require('./models/playerSchema')

// Create 'players' table
db.run(`
  CREATE TABLE IF NOT EXISTS players (
    id TEXT,
    name TEXT,
    runs TEXT
  )
`);

// Insert sample data
const samplePlayers = [
  { id: '2134', name: 'Player1', runs: [{ level: 'Level1', totalSeconds: 30 }, { level: 'Level2', totalSeconds: 45 }] },
  { id: '325325', name: 'Player2', runs: [{ level: 'Level1', totalSeconds: 25 }, { level: 'Level3', totalSeconds: 50 }] }
];

const insertPlayer = db.prepare('INSERT INTO players (id, name, runs) VALUES (?, ?, ?)'); // <-- Update here
samplePlayers.forEach(player => {
  insertPlayer.run(player.id, player.name, JSON.stringify(player.runs));
});
insertPlayer.finalize();

// Read and validate data
db.each('SELECT * FROM players', (err, row) => {
  if (err) {
    console.error(err.message);
    return;
  }

  const player = { id: row.id, name: row.name, runs: JSON.parse(row.runs) };

  if (isPlayer(player)) {
    console.log('Valid Player:', player);
  } else {
    console.log('Invalid Player:', player);
  }
});

// Close the database connection
db.close();
