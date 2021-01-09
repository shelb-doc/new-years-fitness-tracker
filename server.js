const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://app-workout:us0UBxkVCeHV576x@mimikyu.nrjen.mongodb.net/admin?replicaSet=Mimikyu-shard-0&readPreference=primary&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-1',
    {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
    }
);

require('./routes/api-routes')(app);
require('./routes/html-routes')(app);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});