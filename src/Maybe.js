import * as React from 'react';

const Maybe = props => (props.if ? props.children : props.elseRender());

Maybe.defaultProps = {
  elseRender: () => null,
};

export default Maybe;
