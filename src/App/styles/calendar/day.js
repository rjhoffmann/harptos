import glamorous from 'glamorous';

export const DayContainer = glamorous.div({
  width: '10%',
  paddingTop: '10%',
  borderLeft: '1px solid black',
  position: 'relative',
  ':last-child': {
    borderRight: '1px solid black'
  }
});

export const Day = glamorous.div({
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
});
