import _reduce from 'lodash/reduce';

import calendar from './calendar';

// Accumulator function over months, return the total minutes to the beginning
// of the year. If a month contains a holiday, add an additional days worth of minutes.
// If the year is a leap year and the month is after the 7th month (Flamerule), add an 
// additional day for Shieldmeet.
const monthEpoch = (month, isLeapYear) => _reduce(calendar.months, (totalMinutes, m) => {
  let acc = 0;

  if(m.id < month) {
    acc += m.id === 7 ? 1440 : 0;
    acc += m.holiday !== null ? 44640 : 43200;
  }
  
  return totalMinutes + acc;
}, 0);

// Minutes since 0DR
export default (year, month, day) => {
  const monthMinutes = monthEpoch(month, year % 4 === 0);
  const dayMinutes = (day - 1) * 1440;
  // const yearMinutes = (year - 1) * 9;

  // TODO
  return null;
};