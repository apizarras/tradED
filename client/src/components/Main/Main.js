import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import CompanyButton from "../button/Button";
import API from "../../utils/API";

class Main extends Component {
    state = {
        query: ""
    };

    handleCompanyUpdateSubmit = event => {
        // event.preventDefault();
        this.getCompanies();
      };

    render() {
        return (
            <div>
            <Dashboard />
            <CompanyButton onClick={this.handleCompanyUpdateSubmit()}>Update Company</CompanyButton>
            </div>
        );
    };
};

export default Main;