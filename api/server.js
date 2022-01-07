const express = require('express');
const connectDB = require('./config/db');
const app = express();
var cors = require('cors');
app.use(cors())

connectDB();

app.use(express.json({ extended: false }))

app.use('/api/file', require('./routes/file'));
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));