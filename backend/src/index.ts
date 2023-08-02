import express, { Request, Response } from 'express';
import multer from 'multer';
import csvParser from 'csv-parser';
import fs from 'fs';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

const upload = multer({ dest: 'uploads/' });

interface CSVRow {
  [key: string]: string;
}

let csvData: CSVRow[] = [];

app.post(
  '/api/files',
  upload.single('csvFile'),
  (req: Request, res: Response) => {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }

    const file = req.file;
    const data: any[] = [];

    fs.createReadStream(file.path)
      .pipe(csvParser())
      .on('data', (row: any) => {
        data.push(row);
      })
      .on('end', () => {
        csvData = data;
        fs.unlinkSync(file.path);
        res.json({ message: 'CSV file uploaded successfully' });
      })
      .on('error', (err: any) => {
        console.error('Error parsing CSV file:', err);
        res.status(500).json({ error: 'Error parsing CSV file' });
      });
  }
);

app.get('/api/search', (req: Request, res: Response) => {
  const searchTerm = req.query.q as string;

  if (!searchTerm) {
    return res.status(400).json({ error: 'Search term is required' });
  }

  const results = csvData.filter((row: CSVRow) =>
    Object.values(row).some((value) =>
      value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
