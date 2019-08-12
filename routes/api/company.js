require("dotenv").config();
const axios = require("axios");
const db = require("../../models/companiesData");
const apiToken = process.env.apiToken;
const router = require("express").Router();
const companyController = require("../../controllers/companyController")

router.route("/")
.get(companyController.findAll)
// .post(companyController.create)
// router.post("/", (req, res) => {
//     companyController.saveAll();

// })

module.exports = router;