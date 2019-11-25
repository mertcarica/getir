const express = require("express");
const response = require("../helpers/response");
const records = require("./records");

const routes = express.Router();

routes.use(response.setHeadersForCORS);
routes.use("/records", records);

routes.get("/", (req, res) => {
    res.status(200).json({ message: "Ok" });
});

routes.use(function (req, res) {
    response.sendNotFound(res);
});

module.exports = routes;
