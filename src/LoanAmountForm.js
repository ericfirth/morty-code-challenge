import * as React from 'react';

const LoanAmountForm = (props: Props) => (
  <section className="loan-amount">
    <form>
      <label htmlFor="amount">How much do you need loaned to you?</label>
      <input
        onChange={props.handleChange}
        value={props.value}
        type="number"
        id="amount"
      />
      <button onClick={props.submit}>Find Quotes!</button>
    </form>
  </section>
);

export default LoanAmountForm;
