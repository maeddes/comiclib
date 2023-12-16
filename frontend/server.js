// frontend/server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Frontend listening at http://localhost:${port}`);
});
