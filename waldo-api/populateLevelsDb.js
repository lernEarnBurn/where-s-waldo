const levelsDb = require('./dbConfig.js').levelsDb


levelsDb.serialize(() => {
  
  levelsDb.run(`
    CREATE TABLE IF NOT EXISTS levels (
      name TEXT,
      x_start INTEGER,
      x_end INTEGER,
      y_start INTEGER,
      y_end INTEGER
    )
  `);
  //these are not the correct level coordinates 
  levelsDb.run(`
    INSERT INTO levels (name, x_start, x_end, y_start, y_end)
    VALUES
      ('Level 1', 1, 10, 20, 30),
      ('Level 2', 11, 20, 30, 40),
      ('Level 3', 190, 260, 519, 590),  
      ('Level 4', 260, 590, 519, 590),  
      ('Level 5', 190, 260, 519, 590)  
  `);

  levelsDb.each('SELECT * FROM levels', (err, row) => {
    if (err) {
      throw err;
    }
    console.log('Level:', row);
  });
});


levelsDb.close((err) => {
  if (err) {
    return console.error(err.message);
  }
});