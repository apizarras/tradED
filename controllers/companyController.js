require("dotenv").config();
const axios = require("axios");
const db = require("../models/companiesData");
const apiToken = process.env.apiToken;

module.exports = {
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


        
    },
    saveCompanies: (req, res) => {
        const Company = new db.Company;
    }
};