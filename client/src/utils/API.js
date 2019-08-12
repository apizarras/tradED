import axios from "axios";
require("dotenv").config();
//const db = require("../");
const apiToken = process.env.apiToken;

export default {

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

    //get all saved companies and symbols
   
    //save all companies and symbols
    saveCompanies: function(companyData) {
        return axios.post("../../routes/api/company", companyData);
    }
}