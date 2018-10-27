import * as React from 'react';

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

const QuoteTable = props => (
  <table>
    <thead>
      <tr>
        <th>Lender</th>
        <th>Product</th>
        <th>Term</th>
        <th>Type</th>
        <th>Monthly Payment</th>
      </tr>
    </thead>
    <tbody>
      {props.quotes.map((quote, idx) => (
        <tr key={idx}>
          <td>{quote.lender.name}</td>
          <td>{quote.loan_product}</td>
          <td>{quote.loan_term}</td>
          <td>{quote.rate_type}</td>
          <td>{quote.monthly_payment}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default QuoteTable;
