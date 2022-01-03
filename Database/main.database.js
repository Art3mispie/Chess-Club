const dbConfig = require("../Config/database.config.js");
const db = require("better-sqlite3")(dbConfig.dbFilePath);



//  // if ./.data/sqlite.db does not exist, create it, otherwise print records to console
// db.serialize(() => {
//   if (!exists) {
//     console.log("No DB ready");
//   } else {
//     console.log('Database "openData" ready to go!');
//     db.each("SELECT * from openData", (err, row) => {
//       if (row) {
//         console.log(`record: ${row.Name}`);
//       }
//     });
//    }
// });

const selectDataByNameQuery = db.prepare(`SELECT openNames.*, openCode.Code, openPGN.PGN
FROM openNames
INNER JOIN openCode ON openNames.ID = openCode.ID
INNER JOIN openPGN ON openNames.ID = openPGN.ID
WHERE LOWER(openNames.Name) = LOWER(?)`);


const selectDataByECOQuery = db.prepare(`SELECT openNames.*, openCode.Code, openPGN.PGN
FROM openCode
INNER JOIN openNames ON openCode.ID = openNames.ID
INNER JOIN openPGN ON openCode.ID = openPGN.ID
WHERE LOWER(openCode.Code) = LOWER(?)`);

const createNewHistoryRecordQuery = db.prepare(`INSERT INTO History (query_data, query_field, query_result) 
VALUES (?, ?, ?)`);

const getAllHistoryRecordsQuery = db.prepare(`SELECT * FROM History`);

const getHistoryRecordsLimitOffsetQuery = db.prepare(`SELECT * FROM History LIMIT ? OFFSET ?`);

const getHistoryRecordsCountQuery = db.prepare(`SELECT COUNT(*) AS historyRecordsCount FROM History`);


module.exports = {
  selectDataByNameQuery,
  selectDataByECOQuery,
  createNewHistoryRecordQuery,
  getAllHistoryRecordsQuery,
  getHistoryRecordsLimitOffsetQuery,
  getHistoryRecordsCountQuery,
  db,
}