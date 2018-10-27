import React, { Component } from 'react';
import axios from 'axios';

import './App.css';
import LoanAmountForm from './LoanAmountForm';

const initialState = {
  quotes: [],
  loanAmount: '',
};

class App extends Component {
  state = initialState;

  findQuotes = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://morty.mockable.io/quotes?loan_amount=${this.state.loanAmount}`
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }

    console.log(this.state.loanAmount);
  };

  changeLoanAmount = event => this.setState({ loanAmount: event.target.value });

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <h1>Find a Mortgage Lender</h1>
        </header>
        <LoanAmountForm
          value={this.state.loanAmount}
          handleChange={this.changeLoanAmount}
          submit={this.findQuotes}
        />
      </div>
    );
  }
}

export default App;
