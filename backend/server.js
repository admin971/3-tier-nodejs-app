const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 4000;

mongoose.connect('mongodb://mongodb:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.get('/', (_req, res) => {
  res.send('Hello from the Backend API!');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
// testing CI/CD trigger
// trigger validation Fri Mar 28 09:33:34 UTC 2025
// trigger test Fri Mar 28 10:20:21 UTC 2025
