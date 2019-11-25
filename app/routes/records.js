const express = require("express");
const records = require("../controllers/recordController");
const routes = express.Router();

routes
  .route("/")
  .post(records.getRecords);

module.exports = routes;
