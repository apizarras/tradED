const db = require("../models");

// 
module.exports = {
  findAll: function(req, res) {
    db.Company.find(req.query)
      .then(dbCompany => res.json(dbCompany))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    console.log("db.Company" + db.Company);
    db.Company.findById(req.params.q)
      .then(dbCompany => res.json(dbCompany))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Company.create(req.body)
    .then(dbCompany => res.json(dbCompany))
    .catch(err => res.status(422).json(err));
  }
};