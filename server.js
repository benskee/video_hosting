const express = require('express');
const connectDB = require('./config/db');
const app = express();
var cors = require('cors');
app.use(cors())

connectDB();

app.use(express.json({ extended: false }))

app.use('/api/file', require('./api/routes'));
app.use('/api/users', require('./api/users'));
app.use('/api/auth', require('./api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));