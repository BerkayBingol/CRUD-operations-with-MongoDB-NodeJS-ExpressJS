const CONNECTION_URL = "mongodb+srv://berkayb:$yourpass.@cluster0-vx9pv.mongodb.net/test?retryWrites=true";
const DATABASE_NAME = "productstutorial";
const mongoose = require('mongoose');
const mongoDB = process.env.MONGODB_URI || CONNECTION_URL;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const express = require('express')
const product = require('./routes/product.route'); //imports routes
const app = express()
const port = 3000
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/products', product);


app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});