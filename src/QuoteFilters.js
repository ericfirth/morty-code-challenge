import * as React from 'react';

const QuoteFilters = props => (
  <div>
    <label htmlFor="lender">Lender</label>
    <select
      onChange={({ target }) => props.changeFilter('lender', target.value)}
      name="lender"
      defaultValue="all"
    >
      <option value="all">All</option>
      <option value="Apple Bank">Apple Bank</option>
      <option value="Banana Bank">Banana Bank</option>
    </select>
    <label htmlFor="loanTerm">Term</label>
    <select
      onChange={({ target }) => props.changeFilter('loanTerm', target.value)}
      name="loanTerm"
      defaultValue="all"
    >
      <option value="all">All</option>
      <option value="15">15 Years</option>
      <option value="30">30 Years</option>
    </select>
    <label htmlFor="rateType">Term</label>
    <select
      onChange={({ target }) => props.changeFilter('rateType', target.value)}
      name="rateType"
      defaultValue="all"
    >
      <option value="all">All</option>
      <option value="adjustable">Adjustable Rate</option>
      <option value="fixed">Fixed Rate</option>
    </select>
  </div>
);

export default QuoteFilters;
