const loanProductDisplays = {
  FNMA71ARMCF: '30 Year 7/1 Adjustable Rate',
  FNMA30YRFXCF: '30 Year Fixed Rate',
  FNMA15YRFXCF: '15 Year Fixed Rate',
};

export default class Quote {
  constructor(data) {
    this.data = data;
    this.loanTerm = parseInt(this.data.loan_term);
    this.product = loanProductDisplays[this.data.loan_product];
    this.monthlyPayment = parseFloat(this.data.monthly_payment);
    this.lender = this.data.lender.name;
    this.interestRate = parseFloat(this.data.interest_rate);
    this.rateType = this.data.rate_type;
  }
}
