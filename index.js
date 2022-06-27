require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');


const PORT = 3000;

app.use(express.json);


app.use('/api/tasks', tasks);













app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
