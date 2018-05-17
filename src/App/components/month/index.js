import React from 'react';

import { fill } from 'lodash';

import Week from '../week';
import Holiday from '../holiday';

import { MonthContainer, Month, MonthHeader } from '../../styles/calendar';

export default ({ month }) => {
  const weeks = Array.from({length: 3}, (v, k) => k+1);

  return (
    <MonthContainer>
      <Month key={month.id}>
        <MonthHeader>{month.name}</MonthHeader>
        { weeks.map(w => <Week key={w} days={10} weekNumber={w} /> )}
        { month.holiday && <Holiday holiday={month.holiday} />}
      </Month>
    </MonthContainer>
  )
};
