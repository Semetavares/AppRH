import express, { Request, Response } from 'express';
import cors from 'cors';
import { createServerlessHandler } from '@vercel/node';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ ROUTE POST : Ajouter un utilisateur
app.post('/ajouter-utilisateur', (req: Request, res: Response) => {
  const { nom, prenom, email, motdepasse, role } = req.body;
  console.log('Nouvel utilisateur reçu :', { nom, prenom, email, motdepasse, role });
  res.status(200).send('Utilisateur ajouté (simulé)');
});

// ✅ Adaptateur pour Vercel (nécessaire pour le déploiement)
export default createServerlessHandler(app);
