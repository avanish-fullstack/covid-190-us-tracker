import React, { Component } from 'react';
import { getDailyData} from "./API/index";
import Dashboard from "./Components/Dashboard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      dailydata: [],      
    };
  }

  async componentDidMount() {
    this.setState({ dailydata: await getDailyData() });
  }

  render() {
    return <Dashboard />;
  }
}

export default App;
