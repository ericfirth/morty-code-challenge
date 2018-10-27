import * as React from 'react';
import axios from 'axios';

import './App.css';
import LoanAmountForm from './LoanAmountForm';
import Quotes from './Quotes';
import Maybe from './Maybe';

const initialState = {
  quotes: [],
  loanAmount: '',
  searched: false,
};

class App extends React.Component {
  state = initialState;

  findQuotes = async e => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://morty.mockable.io/quotes?loan_amount=${this.state.loanAmount}`
      );
      this.setState({ searched: true, quotes: response.data });
    } catch (error) {
      console.error(error);
    }
  };

  changeLoanAmount = event => this.setState({ loanAmount: event.target.value });

  render() {
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
        <Maybe if={this.state.searched}>
          <Quotes quotes={this.state.quotes} />
        </Maybe>
      </div>
    );
  }
}

export default App;
