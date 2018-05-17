import React from 'react';

export default ({ days, weekNumber }) => {
  const dayArr = Array.from({length: days}, (v, k) => k+1);
  const dayAdd = (weekNumber - 1) * 10;

  return (
    <div>
      { dayArr.map(d => <div>{d + dayAdd}</div>) }
    </div>
  )
};
