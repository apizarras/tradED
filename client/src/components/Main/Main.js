import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";
import CompanyButton from "../button/Button";
import Search from "../Search/Search";
import API from "../../utils/API";

class Main extends Component {
    state = {
        q: "",
        companies: []
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

    // handleCompanyUpdateSubmit = event => {
    //     event.preventDefault();
    //     this.getCompanies();
    //   };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleSearchFormSubmit = event => {
        event.preventDefault();
        this.getCompanies();
      }

    render() {
        return (
            <div>
            <Dashboard />
            <CompanyButton handleCompanyUpdateSubmit={this.handleCompanyUpdateSubmit} />
            <Search 
              handleInputChange={this.handleInputChange}
              handleSearchFormSubmit={this.handleSearchFormSubmit}
              q={this.state.q} />
            </div>
        );
    };
};

export default Main;