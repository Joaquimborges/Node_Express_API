const express = require('express');
const app = express();
const tasksRoute = require('./routes/tasks');
const database = require('./db/mysql');

const PORT = 3000;

app.use(express.static('./public'))
app.use(express.json());
app.use(tasksRoute);

const start = async () => {
    try {
        await database.sync()
        app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
    } catch (error) {
        console.log(error);
    }
}

start()






