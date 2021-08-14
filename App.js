import React from 'react';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './components/Menu';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { initItems } from './reducers/itemsReducer'
import { initCategories } from './reducers/categoriesReducer'

//Store -> Redux store
//Items and categories
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
store.dispatch(initItems)
store.dispatch(initCategories)

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header:()=>(<Menu title='Fresh Burger Invetory' defaultMenu={true}/> )}} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

