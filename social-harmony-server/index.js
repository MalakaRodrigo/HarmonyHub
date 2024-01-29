const express = require('express');
const cors = require('cors');
let bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
const { connectToDatabase } = require('./database/dbConnection');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(cors());

// Establish the MongoDB connection
connectToDatabase();

// Require and use your routes and services with the db reference
const routes = require('./routes/routes');
app.use('/api/v1', routes);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// 404 Error
app.use((req, res, next) => {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});