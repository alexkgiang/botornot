import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignIn from './signin';
import SignUp from './createaccount';

const Stack = createNativeStackNavigator();

function AuthNavigator({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
}

export default AuthNavigator;