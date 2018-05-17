import glamorous from 'glamorous';

export const Calendar = glamorous.div({
  display: 'flex',
  flexDirection: 'column'
});

export const MonthContainer = glamorous.div({
  marginBottom: '20px',
  pageBreakAfter: 'always'
});

export const Month = glamorous.div({
  display: 'flex',
  flexDirection: 'column'
});

export const MonthHeader = glamorous.div({
  border: '1px solid black'
});

export const Week = glamorous.div({
  display: 'flex'
});
