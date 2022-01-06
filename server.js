const express = require('express');
const connectDB = require('./config/db');
const path = require('path')
const app = express();
var cors = require('cors');
app.use(cors())

connectDB();

app.use(express.json({ extended: false }))

app.use('/api/file', require('./api/file'));
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));


app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
    return res.send('pong');
});
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));