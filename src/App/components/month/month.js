import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

export default ({ name, alternateNames }) => (
  <Card style={{ width: '100%' }}>
    <CardHeader title={name} />
  </Card>
);