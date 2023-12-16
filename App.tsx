/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/store';

function App(): JSX.Element {

  // const linking = {
  //   prefixes: ['HomeLuxeapp://'],
  //   config: {
  //     initialRouteName: 'SignIn',
  //     screens: {
  //       Home: {
  //         path: 'home'
  //       },
  //       SignIn: {
  //         path: 'signIn'
  //       },
  //       SignUp: {
  //         path: 'signUp'
  //       },
  //     }
  //   }
  // };

  return (
    <Provider store={store}>
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </Provider>

  );
}

export default App;