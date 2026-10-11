
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World, Welcome to Nodejs Applicationn !!\n\nThis is a containerized application running inside Minikube !!\n');  
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
