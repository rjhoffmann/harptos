import _defaults from 'lodash/defaults';

import month from './month';

export default _defaults({
  id: 1,
  name: 'Hammer',
  alternateNames: ['Deepwinter'],
  holiday: { name: 'Midwinter' }
}, month);
