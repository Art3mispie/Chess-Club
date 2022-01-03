const db = require("../Database/interface.database");

function getAllHistory(_, response) {
  let records = db.getAllHistoryRecords();
  response.json(records);
}

module.exports = {
  getAllHistory,
}