import React, { Component } from "react";
import Dashboard from "../Dashboard/Dashboard";

class Main extends Component {
    state = {
        query: ""
    };

    render() {
        return (
            <Dashboard />
        );
    };
};

export default Main;