// const { selectDataByNameQuery, selectDataByECOQuery } = require("../Database/main.database.js");
const db = require("../Database/interface.database");


function getPgnFromName(request, response){
  // name of function. client.js uses this function to get all data from database
  let name = request.query.name;
  console.log(name);
  let result = db.getByNameAddHistory(name);
  console.log(result);
  if (!result) {
    response.status(404);
  }
  response.json(result);
}

function getPgnFromEco(request, response){
  let code = request.query.ECO;
  console.log(code);
  let result = db.getByEcoCodeAddHistory(code);
  if (!result){
    response.status(404);
  }
  console.log(result);
  response.json(result);
}

module.exports = {
  getPgnFromName,
  getPgnFromEco,
}