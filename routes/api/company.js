require("dotenv").config();
const router = require("express").Router();
const dbController = require("../../controllers/dbController");

router.route("/")
.get(dbController.findAll)
.post(dbController.create);

router.route("/:q")
.get(dbController.findById);

console.log("company.js file");

module.exports = router;