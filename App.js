import React from 'react';
import AppContainer from './app/containers/AppContainer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailScreen} from './app/components/DetailScreen';
import {createStore , applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import itemReducer from './app/redux/reducers/itemReducer'


const Stack = createStackNavigator();
const middleWare = applyMiddleware(thunk)(createStore)
const store = middleWare(itemReducer)


export const App = () => {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={AppContainer}
          options={{title: 'Main screen'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Full screen'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};
