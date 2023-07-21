require("dotenv").config();
const express = require("express");
var http = require ('http')
const mongo = require ('mongoose')
const bodyParser = require("body-parser");
const mongoconnection = require('./config/DBConnection.json')


const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongo.connect(mongoconnection.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("DataBase Connected");
})
.catch((err) => {
  console.log(err);
});

const server = http.createServer(app);
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});

module.exports=app
