const app = require('./src/app.js');

const port = 3333;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})