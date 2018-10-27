import * as React from 'react';

const QuoteFilters = props => (
  <section className="filters">
    <div>
      <label htmlFor="lender">Lender</label>
      <select
        onChange={({ target }) => props.changeFilter('lender', target.value)}
        name="lender"
        value={props.lender}
      >
        <option value="all">All</option>
        <option value="Apple Bank">Apple Bank</option>
        <option value="Banana Bank">Banana Bank</option>
      </select>
    </div>
    <div>
      <label htmlFor="loanTerm">Term</label>
      <select
        onChange={({ target }) => props.changeFilter('loanTerm', target.value)}
        name="loanTerm"
        value={props.loanTerm}
      >
        <option value="all">All</option>
        <option value="15">15 Years</option>
        <option value="30">30 Years</option>
      </select>
    </div>
    <div>
      <label htmlFor="rateType">Type</label>
      <select
        onChange={({ target }) => props.changeFilter('rateType', target.value)}
        name="rateType"
        value={props.rateType}
      >
        <option value="all">All</option>
        <option value="adjustable">Adjustable Rate</option>
        <option value="fixed">Fixed Rate</option>
      </select>
    </div>
    <button onClick={props.resetFilters}>Reset</button>
  </section>
);

export default QuoteFilters;
