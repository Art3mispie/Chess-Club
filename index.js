const express = require("express"); //don't change this
const bodyParser = require("body-parser"); //don't change this
// const fs = require("fs"); //don't change this
const getPgnRouter = require("./Routes/getPgn.routes.js");
const serverConfig = require("./Config/server.config.js");

const app = express(); //don't change this

app.use(bodyParser.urlencoded({ extended: true })); //don't change this
app.use(bodyParser.json()); //don't change this

app.use(express.static("public")); //telling server where your files are
app.use(express.static("views")); //telling server where your files are

app.use(getPgnRouter)

app.get("/", (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`); //location of index.html (only change if you move the index.html file from views)
});


var listener = app.listen(serverConfig.port, () => {
  //don't touch
  console.log(`Your app is listening on port ${listener.address().port}`); //don't touch
});