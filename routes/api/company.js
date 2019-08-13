require("dotenv").config();
const axios = require("axios");
const db = require("../../models/companiesData");
const apiToken = process.env.apiToken;
const router = require("express").Router();
const companyController = require("../../controllers/companyController");
const companyDbController = require("../../controllers/companyDbController");


router.route('/search').get((req, res) => {
    db.find()
    .then(companies => console.log(companies))
    .catch(err => console.log('Error' + err));
});

// router.route('/:id').get((req, res) => {
//     db.findById(req.params.id)
//     .then(company => res.json(company))
//     .catch(err => res.status(400).json(err));
// });

router.route("/")
.get(companyController.findAll)
// .post(companyController.create)

router.route("/:id")
.get(companyDbController.findById);

console.log("company.js file");

module.exports = router;