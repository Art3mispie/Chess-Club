const express = require('express');
const historyHandlers = require('../Handlers/searchHistory.handlers');

router = express.Router();

router.get("/allHistory", historyHandlers.getAllHistory);

module.exports = router;