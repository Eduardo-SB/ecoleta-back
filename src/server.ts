import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('list users');
  res.json(['Eduardo', 'Karla', 'Rebeca']);
});

app.listen(5555);
