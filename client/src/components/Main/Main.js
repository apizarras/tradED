import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import CompanyButton from "../button/Button";
import API from "../../utils/API";

class Main extends Component {
    state = {
        q: "",
        stockArr: []
    };

    getCompanies = () => {
        API.getCompanies(this.state.stockArr)
          .then(res =>
            this.setState({
              companies: res.data
            })
          )
          .catch(() =>
            this.setState({
              companies: [],
              message: "nothing found"
            })
          );
      };

    handleCompanyUpdateSubmit = event => {
        event.preventDefault();
        this.getCompanies();
      };

    render() {
        return (
            <div>
            <Dashboard />
            <CompanyButton
              handleCompanyUpdateSubmit={this.handleCompanyUpdateSubmit} />
            </div>
        );
    };
};

export default Main;