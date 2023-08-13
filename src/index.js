const express = require('express')
const app = express();

app.get('/', (request, response) => {
	return response.json({ message: 'Olá Dev!' })
});

app.listen(3000, () => {
    console.log('Server started on port 3000! 🏆')
});