const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'patient-health-dashboard-backend' });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend server running on port ${port}`);
});
