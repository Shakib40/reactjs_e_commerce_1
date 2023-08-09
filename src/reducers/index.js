import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import oauth from './oauth';
import notification from './notification';

const appReducer = combineReducers({
  router: routerReducer,
  oauth,
  notification,
  form: formReducer,
});

// Setup root reducer
const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
