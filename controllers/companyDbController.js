const db = require("../models");

// Defining methods for the bookController
module.exports = {
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbBook => res.json(dbBook))
      .catch(err => res.status(422).json(err));
  },
//   create: function(req, res) {
//     db.Book.create(req.body)
//       .then(dbBook => res.json(dbBook))
//       .catch(err => res.status(422).json(err));
//   }
};