import axios from "axios";
import companyController from "../../../controllers/companyController";

export default {
    //get all saved companies and symbols
    getCompanies: function(query) {
        return axios.get("../../routes/api/companies");
    },
    //save all companies and symbols
    saveCompanies: function(data) {
        return axios.post("../../routes/api/companies", data);
    }
}