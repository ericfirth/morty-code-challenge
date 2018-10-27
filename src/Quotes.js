import * as React from 'react';

import Maybe from './Maybe';

class App extends Component {
render() {
  return <Maybe
    if={this.props.quotes.length > 0}
    render={() => (
      <ul>
        {this.props.quotes.map((quote, index) => (
          <li id={index}>there is a quote here</li>
        ))}
      </ul>
    )}
    elseRender={() =>
      'No Quotes found for that loan amount, please try a different amount'
    }
  />
 }
);

export default Quotes;
