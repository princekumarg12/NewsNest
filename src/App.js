import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from "./components/News";

export default class App extends Component {
  render() {
    const today = new Date();
    const oneMonthAgo = new Date(today);
    oneMonthAgo.setMonth(today.getMonth() - 1);

    // Format the date to YYYY-MM-DD
    const formattedDate = oneMonthAgo.toISOString().split('T')[0];

    console.log(formattedDate); // Outputs: YYYY-MM-DD format
    return (
      <div>
        <NavBar />
        <News pageSize={4} newsDate={formattedDate} />
      </div>
    )
  }
}
