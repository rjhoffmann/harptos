import _defaults from 'lodash/defaults';

import month from './month';

export default _defaults({
  id: 11,
  name: 'Uktar',
  holiday: { name: 'The Feast of the Moon' }
}, month);