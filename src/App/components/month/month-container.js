import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Month from './month';

export default ({ months }) => (
  <List>
    {months.map(month => (
      <ListItem key={month.id} style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Month name={month.name} />
      </ListItem>
    ))}
  </List>
);