import { combineReducers } from 'redux';

import { Reducer } from './Reducer';

const reducers = combineReducers({
  allreducer: Reducer
});
export default reducers;
