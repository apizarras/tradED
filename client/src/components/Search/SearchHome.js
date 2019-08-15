import React, { Component } from "react";
import Search from "./Search";
import API from "../../utils/API";
import Container from '@material-ui/core/Container';
import { List, ListItem } from "../List/List";

// const Company = props => (
//   <tr>
//     <td>{props.company.name}</td>
//     <td>{props.company.symbol}</td>
//   </tr>
// )
class SearchHome extends Component {
    state={
        q: "",
        companies: []
    };

    getCompanies = () => {
      console.log("getCompanies firing");
      console.log(this.state.q);
        API.getCompanies(this.state.q)
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

      handleInputChange = event => {
        console.log("handleInputChange code")
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleSearchFormSubmit = event => {
        event.preventDefault();
        console.log("Search button clicked");
        this.getCompanies();
      };

      render() {
          return(
              <div>
              <Search
              handleInputChange={this.handleInputChange}
              handleSearchFormSubmit={this.handleSearchFormSubmit}
              q={this.state.q} />
          <div size="md-6 sm-12">

              <h1>Search Results</h1>

            {this.state.companies.length ? (
              <List>
                {this.state.companies.map(companies => (
                  <ListItem key={companies._id}>
                      <strong>
                        {companies.name} Name/Symbol {companies.symbol}
                      </strong>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </div>
              </div>
          )
      }
};

export default SearchHome;
