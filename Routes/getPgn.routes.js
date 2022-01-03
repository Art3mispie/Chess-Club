const express = require("express");
const getPgnHandlers = require('../Handlers/getPgn.handlers.js');


const router = express.Router();

router.get("/getPGNfromName", getPgnHandlers.getPgnFromName);
router.get("/getPGNfromECO", getPgnHandlers.getPgnFromEco);

module.exports = router;
