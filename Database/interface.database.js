const { selectDataByNameQuery,
        selectDataByECOQuery,
        createNewHistoryRecordQuery,
        getAllHistoryRecordsQuery,
        getHistoryRecordsLimitOffsetQuery,
        getHistoryRecordsCountQuery,
        db,
      } = require("./main.database.js");
    
const dbConfig = require("../Config/database.config.js")
const getByEcoCodeHistoryFieldName = "ECO_CODE";
const getByNameHistoryFieldName = "NAME";

const notFoundMessage = "NOT_FOUND";


function getByEcoCodeAddHistory(code) {
  // searching for record. if it exist adding it's id to history, otherwise notFoundMessage.
  // returns an item if found. if not return null.
  var resultStatus, returnData;
  returnData = selectDataByECOQuery.get(code);
  if (!returnData) {
    resultStatus = notFoundMessage;
    returnData = null;
  }
  resultStatus = returnData.ID;
  createNewHistoryRecordQuery.run(code, getByEcoCodeHistoryFieldName, resultStatus);
  console.log(`Return data ${returnData}`)
  return returnData;
}

function getByNameAddHistory(name) {
  // searching for record by opening name. if it exist adding it's id to history, otherwise notFoundMessage
  // returnes an item if found. if not return null
  var resultStatus, returnData;
  returnData = selectDataByNameQuery(name);
  if (!returnData){
    resultStatus = notFoundMessage;
    returnData = null;
  }
  resultStatus = returnData.ID;
  createNewHistoryRecord.run(name, getByNameHistoryFieldName, resultStatus);
  return returnData;
}

function getAllHistoryRecords() {
  let result = getAllHistoryRecordsQuery.all();
  return result;
}

function getHistoryRecordsByPage(pageNum) {
  let offset = (pageNum - 1) * dbConfig.pageSize;
  let result = getHistoryRecordsLimitOffsetQuery.get(dbConfig.pageSize, offset);
  return result;
}

function getAmountOfPages() {
  let recordsCount = getHistoryRecordsCountQuery.get().historyRecordsCount;
  return Math.ceil(recordsCount / dbConfig.pageSize);
}

module.exports = {
  getByEcoCodeAddHistory,
  getByNameAddHistory,
  getAllHistoryRecords,
  getHistoryRecordsByPage,
  getAmountOfPages,
}