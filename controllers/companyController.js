require("dotenv").config();
const axios = require("axios");
const db = require("../models/companiesData");
const apiToken = process.env.apiToken;

//should contain the db calls
module.exports = {
    // find from mongo db
    findById: function(req,res) {
        db.Companies.findById(req.params.id)
        .then(dbCompanies => res.json(dbCompanies))
        .catch(err => res.status(422).json(err));
    },
    //save companies to mongo db 
    create: (req, res) => {
        db.Company.create(req.body);
        console.log("this is the body of save companies" + req.body)
        .then(dbCompany => res.json(dbCompany))
        .catch(err => res.status(422).json(err));
};