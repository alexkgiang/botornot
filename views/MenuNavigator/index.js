import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from '../menu';
import SinglePlayer from '../singleplayer';
import MultiPlayer from '../multiplayer';

const Stack = createNativeStackNavigator();

function MenuNavigator({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: true}} />
      <Stack.Screen name="SinglePlayer" component={SinglePlayer} options={{ headerShown: true}} />
      <Stack.Screen name="MultiPlayer" component={MultiPlayer} options={{ headerShown: true}} />
    </Stack.Navigator>
  );
}

export default MenuNavigator;