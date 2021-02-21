import counterReducer from './counter';
import dataReducer from './dataReducer';
import categoriesReducer from './categoriesReducer'
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    data: dataReducer,
    categories: categoriesReducer
});

export default allReducers