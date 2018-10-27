import * as React from 'react';
import startCase from 'lodash/startCase';

import Maybe from './Maybe';

const SortableTableHeader = props => (
  <th onClick={() => props.changeSort(props.attr)}>
    {startCase(props.attr)}
    <Maybe if={props.sortBy === props.attr} elseRender={() => '⇅'}>
      {props.sortDir === 'asc' ? '▲' : '▼'}
    </Maybe>
  </th>
);

export default SortableTableHeader;
