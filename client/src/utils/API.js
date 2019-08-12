import axios from "axios";
// require("dotenv").config();
//const db = require("../");
// const apiToken = process.env.apiToken;

export default {
    //get companies from the stock api
    getCompanies: function(q) {
        return axios.get("/api/company");
    },
    //save all companies and symbols
    saveCompanies: function(companyData) {
        return axios.post("/api/company", companyData);
    }
}