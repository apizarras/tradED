const router = require("express").Router();
const companyController = require("../../controllers/companyController");

// Matches with "/api/iexapi"
router
  .route("/")
  .get(companyController.findAll);

module.exports = router;