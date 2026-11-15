const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DIST_PATH = path.join(__dirname, 'website', 'dist');

// Serve static production build from website/dist
app.use(express.static(DIST_PATH));

// Serve deliverables directory directly (PDFs, DOCX, PPTX)
app.use('/deliverables', express.static(path.join(__dirname, 'deliverables')));

// Health check endpoint for Railway deployment monitoring
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Single Page Application fallback: serve index.html for all non-file routes
app.get('*', (req, res) => {
  res.sendFile(path.join(DIST_PATH, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Indian Art Heritage Exhibition server is running on http://0.0.0.0:${PORT}`);
});
