import { combineReducers } from 'redux';
import { navigate } from 'gatsby'; // Here is the source of the problem

const reducer1 = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  reducer1
});