import React, { Component } from 'react';
import { getDailyData } from "./API/index";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailydata: [],
    };
  }

  async componentDidMount() {
    try {
      let response = await getDailyData();

      console.log('componentdid mount');

      this.setState({
        dailydata: response
      });

      if (!response.ok) {
        throw Error(response.statusText);
      }

    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (this.state.dailydata.length !== 0 ? <Dashboard data={this.state.dailydata} /> : <div>Loading...</div>);
  }
}

export default App;
