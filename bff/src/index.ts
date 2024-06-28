import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT =  3002;

let favorites: any[] = [];

app.use(cors());
app.use(express.json());

app.post('/favorites', (req: Request, res: Response) => {
  const video = req.body;
  const index = favorites.findIndex(fav => fav.id === video.id);
  if (index >= 0) {
    favorites.splice(index, 1);
  } else {
    favorites.push(video);
  }
  res.json(favorites);
});

app.get('/favorites', (req: Request, res: Response) => {
  res.json(favorites);
});

app.listen(PORT, () => {
  console.log(`BFF is running on http://localhost:${PORT}`);
});
