const express = require('express');
const app = express();
const port = 3000;

app.get('/', (_req, res) => {
  res.send('<h1>Welcome to the Frontend!</h1><p>This is running on Node.js.</p>');
});

app.listen(port, () => {
  console.log(`Frontend running at http://localhost:${port}`);
});
