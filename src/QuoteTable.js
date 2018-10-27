import * as React from 'react';
import SortableTableHeader from './SortableTableHeader';
import Maybe from './Maybe';

const QuoteTable = props => (
  <table>
    <thead>
      <tr>
        <SortableTableHeader attr="lender" {...props} />
        <SortableTableHeader attr="product" {...props} />
        <SortableTableHeader attr="monthlyPayment" {...props} />
        <SortableTableHeader attr="interestRate" {...props} />
      </tr>
    </thead>
    <Maybe
      if={props.quotes.length > 0}
      elseRender={() => 'No Quotes with those filters'}
    >
      <tbody>
        {props.quotes.map((quote, idx) => (
          <tr key={idx}>
            <td>{quote.lender}</td>
            <td>{quote.product}</td>
            <td>
              {quote.monthlyPayment.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </td>
            <td>
              {quote.interestRate.toLocaleString('en-US', {
                minimumFractionDigits: 1,
                style: 'percent',
              })}
            </td>
          </tr>
        ))}
      </tbody>
    </Maybe>
  </table>
);

export default QuoteTable;
