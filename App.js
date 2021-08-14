import React from 'react';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './reducers'

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import {initItems} from './reducers/itemsReducer'
import {initCategories} from './reducers/categoriesReducer'

//Store -> Redux store
//So far just Items
//TODO -> Include Categories
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
store.dispatch(initItems)
store.dispatch(initCategories)

export default function App() {
  return (
    <Provider store = {store}>
      <NavigationContainer>
      <HomeScreen/>
      </NavigationContainer>
    </Provider>
  );
}

