import React, { Component } from 'react';

import Month from './components/month';
import months from './data/months';

import { Calendar } from './styles/calendar';

export default () => <Calendar>{ months.map(m => <Month month={m} />) }</Calendar>;
