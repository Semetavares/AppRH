const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Pour servir les fichiers HTML depuis le dossier "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route GET principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ✅ ROUTE POST : formulaire pour ajouter un utilisateur
app.post('/ajouter-utilisateur', (req, res) => {
  const { nom, prenom, email, motdepasse, role } = req.body;
  console.log('Nouvel utilisateur reçu :', { nom, prenom, email, motdepasse, role });
  res.status(200).send('Utilisateur ajouté (simulé)');
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
