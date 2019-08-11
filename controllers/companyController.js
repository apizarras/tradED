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
},
getCompanies:(req, res) => {

    axios.get('https://cloud.iexapis.com/beta/ref-data/symbols?token=' + apiToken).then( response => {
    const goodDataArr = response.data;


const stockArr =[];
goodDataArr.forEach((obj) => {
const newObj= {};

 const companyName = obj.name;
 const tickerSymbol = obj.symbol;
 newObj.name = companyName;
 newObj.symbol = tickerSymbol;
 stockArr.push(newObj)
})
      return stockArr

}).then(data => 
    res.json(data)
    )
    .catch(err => console.log(err))  
}
}