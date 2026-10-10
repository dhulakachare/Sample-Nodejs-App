
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Node.js running inside Minikube!');
  console.log("Welcome to the Sample Hello World Nodejs Application !");
  console.log("Thank you !!");

});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
