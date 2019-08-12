require("dotenv").config();
const axios = require("axios");
const db = require("../../models/companiesData");
const apiToken = process.env.apiToken;
const router = require("express").Router();
const companyController = require("../../controllers/companyController");
const companyDbController = require("../../controllers/companyDbController");

router.route("/")
.get(companyController.findAll)
// .post(companyController.create)
// router.post("/", (req, res) => {
//     companyController.saveAll();

// })

router.route("/:id")
.get(companyDbController.findById);

module.exports = router;