import glamorous from 'glamorous';

export const Week = glamorous.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderTop: '1px solid black',
  ':last-child': {
    borderBottom: '1px solid black'
  }
});
