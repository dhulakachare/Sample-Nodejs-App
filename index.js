
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello..Welcome to Nodejs Applicationn !!');
  res.send('This Node.js is a containerized application running inside Minikube !!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
