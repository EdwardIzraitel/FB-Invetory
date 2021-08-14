import itemsReducer from './itemsReducer';
import categoriesReducer from './categoriesReducer';
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
  itemsReducer,
  categoriesReducer
});

export default rootReducer;