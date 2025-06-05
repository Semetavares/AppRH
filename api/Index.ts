import { NowRequest, NowResponse } from '@vercel/node';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route POST pour ajouter un utilisateur
app.post('/ajouter-utilisateur', (req, res) => {
  const { nom, prenom, email, motdepasse, role } = req.body;
  console.log('Nouvel utilisateur reçu :', { nom, prenom, email, motdepasse, role });
  res.status(200).send('Utilisateur ajouté (simulé)');
});

// Adaptateur pour Vercel
export default (req: NowRequest, res: NowResponse) => {
  app(req, res);
};
