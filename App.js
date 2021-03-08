/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 
import React, {
  useEffect,
  useState
} from 'react';

import {
  StatusBar
} from 'react-native';

import { 
  NavigationContainer 
} from '@react-navigation/native';

import {
  createStore, 
  combineReducers, 
  applyMiddleware
} from 'redux';

import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';

import SplashScreen from './src/screens/splashScreen';

import UserReducer from './src/redux/user/userReducer';

import NavigationRoute from './src/main/navigations';

const rootReducer = combineReducers({
  users:UserReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk)); 

const App = () => {

  const [appState, setAppState] = useState(true);

  useEffect(() =>{
    loadScreen()
  },[])

  const loadScreen = () =>{
    setTimeout(
      () =>{
        setAppState(true);
      }, 3000);
      setAppState(false);
  }

  return (
    <>
    <StatusBar backgroundColor="white" barStyle="dark-content"/>
      {
        !appState 
        ?
          <>
            <SplashScreen/>
          </>
        :
        <>
          <Provider store={store}>
            <NavigationContainer>
              <NavigationRoute/>
            </NavigationContainer>
          </Provider>
        </>
      }
    </>
  );
};

export default App;
