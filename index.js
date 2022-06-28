require('./db/connect');
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connect = require('./db/connect');
require('dotenv').config()


const PORT = 3000;

app.use(express.json);

app.use('/api/tasks', tasks);

const start = async () => {
    try {
        await connect(process.env.ACCESS_SECRET_KEY);
        app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start()






