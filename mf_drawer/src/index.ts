import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.get('/videos', (req : any, res : any) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/favorites', (req : any, res : any) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`MF_DRAWER is running on http://localhost:${PORT}`);
});
