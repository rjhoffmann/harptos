import React from 'react';

import calendar from './data/calendar';

import { Calendar } from './styles/calendar';
import { MonthContainer, Month, MonthHeader } from './styles/calendar/month';
import { Week } from './styles/calendar/week';
import { Day, DayContainer } from './styles/calendar/day';

export default () => (
  <Calendar>
    {calendar.months.map(month => (
      <MonthContainer key={month.id}>
        <Month>
          <MonthHeader>{month.name}</MonthHeader>
          {month.weeks.map(week => (
            <Week key={week.id}>
              {week.days.map(day => (
                <DayContainer key={day.id}>
                  <Day>{day.id}</Day>
                </DayContainer>
              ))}
            </Week>
          ))}
        </Month>
      </MonthContainer>
    ))}
  </Calendar>
);
