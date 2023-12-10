const isPlayer = require('./models/playerSchema')
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./db/players.sqlite', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the database.');
});

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
  { id: '325325', name: 'Player2', runs: [{ level: 'Level1', totalSeconds: 25 }, { level: 'Level3', totalSeconds: 50 }] },
  { id: '4785', name: 'Player3', runs: [{ level: 'Level1', totalSeconds: 40 }, { level: 'Level2', totalSeconds: 55 }] },
  { id: '9071', name: 'Player4', runs: [{ level: 'Level1', totalSeconds: 28 }, { level: 'Level3', totalSeconds: 48 }] },
  { id: '6542', name: 'Player5', runs: [{ level: 'Level2', totalSeconds: 35 }, { level: 'Level3', totalSeconds: 60 }] },
  { id: '1239', name: 'Player6', runs: [{ level: 'Level1', totalSeconds: 32 }, { level: 'Level2', totalSeconds: 50 }] },
  { id: '8765', name: 'Player7', runs: [{ level: 'Level2', totalSeconds: 42 }, { level: 'Level3', totalSeconds: 55 }] },
  { id: '2346', name: 'Player8', runs: [{ level: 'Level1', totalSeconds: 38 }, { level: 'Level3', totalSeconds: 52 }] },
  { id: '5432', name: 'Player9', runs: [{ level: 'Level1', totalSeconds: 33 }, { level: 'Level2', totalSeconds: 46 }] },
  { id: '7890', name: 'Player10', runs: [{ level: 'Level2', totalSeconds: 37 }, { level: 'Level3', totalSeconds: 58 }] },
  { id: '1357', name: 'Player11', runs: [{ level: 'Level1', totalSeconds: 29 }, { level: 'Level2', totalSeconds: 47 }] },
];

const insertPlayer = db.prepare('INSERT INTO players (id, name, runs) VALUES (?, ?, ?)'); 
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
