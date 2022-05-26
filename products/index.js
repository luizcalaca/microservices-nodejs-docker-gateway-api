const app = require('express')();

app.get('/products', (req, res) => res.send('Hello Products, API with MySQL!'));

app.listen(3000, () => console.log(`Products API listening on port 3000!`));