const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/authenticate', (req, res) => {
    res.send({ message: 'User authenticated successfully' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Auth Service running on port ${port}`);
});
