const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("Hallo Welt!");
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf Port ${port}`);
});