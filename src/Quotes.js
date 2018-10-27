import * as React from 'react';
import isEqual from 'lodash/isEqual';

import Maybe from './Maybe';
import QuoteTable from './QuoteTable';

// interest_rate: ".021"
// lender: {
// id: "1:",
// name: "Apple Bank",
// symbol: "APPLE",
// },
// loan_product: "FNMA15YRFXCF"
// loan_term: "15"
// monthly_payment: "3652.78"
// rate_type: "fixed"

class Quotes extends React.Component {
  state = { sortBy: undefined, sortDirection: 'asc' };

  render() {
    console.log(this.props.quotes);
    return (
      <Maybe
        if={this.props.quotes.length > 0}
        elseRender={() =>
          'No Quotes found for that loan amount, please try a different amount'
        }
      >
        <QuoteTable quotes={this.props.quotes} />
      </Maybe>
    );
  }
}

export default Quotes;
