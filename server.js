require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 5000;
const app = express();
const { data } = require('./data');

app.use(bodyParser.json());

app.use(cors());

const players = data.map((player, index) => ({ ...player, id: index }));

app.get('/api/players', (req, res) => {
  res.send(players);
});
app.get('/', (req, res) => {
  res.send(`<h3>Score! You've made it to the API</h3>`)
  });

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
