const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 4538;

app.use(express.static(__dirname + '/dist/anglota'));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../dist/anglota', 'index.html'));
});


app.listen(PORT, function () {
    console.log(`Listening on port ${PORT}`);
});


