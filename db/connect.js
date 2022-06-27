const mongoose = require('mongoose');

const connectionString =
'mongodb+srv://jborges:testenode@expressnode.audyfjv.mongodb.net/EXPRESS?retryWrites=true&w=majority';

mongoose
.connect(connectionString)
.then(() => console.log('Connected to the DB...'))
.catch((err) => console.log(err))
