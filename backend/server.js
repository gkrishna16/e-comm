const app = require('express')();
const products = require('./data/products');
const port = 5000 || process.env.port;

app.get('/', (req, res) => {
	res.send(`API running ......`);
});

app.get('/api/products', (req, res) => {
	res.json(products);
});

app.listen(port, () => {
	console.log(`server listening on ${port}`);
});
