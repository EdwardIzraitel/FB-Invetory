import React from 'react';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Image, TouchableOpacity } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import {DrawerNavigator} from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import rootReducer from './reducers'

import thunkMiddleWare from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension'
import { initItems } from './reducers/itemsReducer'
import { initCategories } from './reducers/categoriesReducer'

import Menu from './components/Menu';
import Home from './screens/Home';
import Test from './screens/Test';


//Store -> Redux store
//Items and categories
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleWare)));
store.dispatch(initItems)
store.dispatch(initCategories)

const Drawer = createDrawerNavigator();
// const Stack = createStackNavigator();





export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={Home}
          options={{header:({navigation})=>(<Menu title='Fresh Burger Invetory' defaultMenu={true} navigation = {navigation}/> )}}
          />
          <Drawer.Screen name="Test" component={Test} />
        </Drawer.Navigator>
        {/* <Stack.Navigator>
          <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{header:()=>(<Menu title='Fresh Burger Invetory' defaultMenu={true}/> )}} />
          <Stack.Screen
          name="Test"
          component={Test}
          options={{header:()=>(<Menu title='Test' defaultMenu={true}/> )}} />
        </Stack.Navigator> */}
      </NavigationContainer>
    </Provider>
  );
}
