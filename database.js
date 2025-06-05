const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// On utilise un chemin absolu pour que ça marche bien partout
const dbPath = path.join(__dirname, 'bdd.sqlite');
const db = new sqlite3.Database(dbPath);

// Création de la table des utilisateurs si elle n'existe pas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS utilisateurs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nom TEXT NOT NULL,
      prenom TEXT NOT NULL,
      email TEXT UNIQUE NOT NULL,
      motdepasse TEXT NOT NULL,
      role TEXT NOT NULL
    )
  `);
});

module.exports = db;
