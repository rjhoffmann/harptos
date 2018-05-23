import _times from 'lodash/times';

export default {
  weeks: _times(3, w => ({
    id: w,
    days: _times(10, d => ({
      id: d+(w*10)+1
    }))
  }))
};