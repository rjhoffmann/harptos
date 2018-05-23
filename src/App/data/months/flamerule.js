import _defaults from 'lodash/defaults';

import month from './month';

export default _defaults({
  id: 7,
  name: 'Flamerule',
  holiday: { name: 'Midsummer' }
}, month);