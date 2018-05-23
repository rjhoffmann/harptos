import React from 'react';
import { times } from 'lodash';

import months from './data/months';

import { Calendar } from './styles/calendar';
import { MonthContainer, Month, MonthHeader } from './styles/calendar/month';
import { Week } from './styles/calendar/week';
import { Day, DayContainer } from './styles/calendar/day';

export default () => (
  <Calendar>
    {months.map(month => (
      <MonthContainer key={month.id}>
        <MonthHeader>{month.name}</MonthHeader>
        {times(3, weekNumber => (
          <Week key={weekNumber}>
            {times(10, d => {
              const dayNumber = d+(weekNumber*10)+1;
              
              return (
                <DayContainer key={dayNumber}>
                  <Day>{dayNumber}</Day>
                </DayContainer>
              )
            })}
          </Week>
        ))}
      </MonthContainer>
    ))}
  </Calendar>
);
