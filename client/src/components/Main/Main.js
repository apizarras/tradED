import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import CompanyButton from "../button/Button";

class Main extends Component {
    state = {
        q: "",
        companies: []
    };

    
    handleCompanyUpdateSubmit = event => {
        event.preventDefault();
        this.getCompanies();
      };

    render() {
        return (
            <div>
            <Dashboard />
            <CompanyButton />
            </div>
        );
    };
};

export default Main;