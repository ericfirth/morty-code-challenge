import * as React from 'react';
import isEqual from 'lodash/isEqual';
import every from 'lodash/every';
import { flow, orderBy, filter } from 'lodash/fp';

import Maybe from './Maybe';
import QuoteTable from './QuoteTable';
import QuoteFilters from './QuoteFilters';

class QuoteSection extends React.Component {
  state = {
    filters: {
      loanTerm: 'all',
      lender: 'all',
      rateType: 'all',
    },
    sortBy: 'monthlyPayment',
    sortDir: 'asc',
  };

  changeFilter = (filter, value) => {
    this.setState(state => ({
      ...state,
      filters: { ...state.filters, [filter]: value },
    }));
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
      (val, filter) => val === 'all' || quote[filter] == val
    );

  quotesToDisplay = () =>
    flow([
      filter(obj => this.filtered(obj)),
      orderBy([obj => obj[this.state.sortBy]], [this.state.sortDir]),
    ])(this.props.quotes);

  render() {
    return (
      <Maybe
        if={this.props.quotes.length > 0}
        elseRender={() =>
          'No Quotes found for that loan amount, please try a different amount'
        }
      >
        <QuoteFilters changeFilter={this.changeFilter} {...this.state.filters} />
        <QuoteTable
          quotes={this.quotesToDisplay()}
          sortBy={this.state.sortBy}
          sortDir={this.state.sortDir}
          changeSort={this.changeSort}
        />
      </Maybe>
    );
  }
}

export default QuoteSection;
