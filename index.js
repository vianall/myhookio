const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) ,=> {
  res.send("It's working!");
});

app.post('/webhook', async (req, res) => {
  try {
    // Mengirim req.body menggunakan Axios
    const response = await axios.post('https://api.bots.business/v1/bots/819550/new-webhook?&command=%2FonIncome&public_user_token=2c47674b5c8e7740763f2477f749e14d&user_id=2711154', req.body);

    // Mengembalikan response dari Axios ke client
    res.send(response.data);
  } catch (error) {
    // Mengirim error ke client
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
