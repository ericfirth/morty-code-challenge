import * as React from 'react';
import every from 'lodash/every';
import { flow, orderBy, filter } from 'lodash/fp';

import Maybe from './Maybe';
import QuoteTable from './QuoteTable';
import QuoteFilters from './QuoteFilters';

const initialState = {
  filters: {
    loanTerm: 'all',
    lender: 'all',
    rateType: 'all',
  },
  sortBy: 'monthlyPayment',
  sortDir: 'asc',
};

class QuoteSection extends React.Component {
  state = initialState;

  changeFilter = (filter, value) => {
    this.setState(state => ({
      ...state,
      filters: { ...state.filters, [filter]: value },
    }));
  };

  resetFilters = () => {
    this.setState({ filters: initialState.filters });
  };

  changeSort = attr => {
    let sortDir = 'asc';
    if (attr === this.state.sortBy && this.state.sortDir === 'asc') {
      sortDir = 'desc';
    }
    this.setState({ sortBy: attr, sortDir });
  };

  filtered = quote =>
    every(
      this.state.filters,
      (val, filter) => val === 'all' || quote[filter] === val
    );

  quotesToDisplay = () =>
    flow([
      filter(obj => this.filtered(obj)),
      orderBy([obj => obj[this.state.sortBy]], [this.state.sortDir]),
    ])(this.props.quotes);

  render() {
    return (
      <section className="quotes">
        <Maybe
          if={this.props.quotes.length > 0}
          elseRender={() =>
            'No quotes found for that loan amount, please try a different amount'
          }
        >
          <QuoteFilters
            resetFilters={this.resetFilters}
            changeFilter={this.changeFilter}
            {...this.state.filters}
          />
          <QuoteTable
            quotes={this.quotesToDisplay()}
            sortBy={this.state.sortBy}
            sortDir={this.state.sortDir}
            changeSort={this.changeSort}
          />
        </Maybe>
      </section>
    );
  }
}

export default QuoteSection;
