import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Menu from '../menu';
import SinglePlayer from '../singleplayer';
import MultiPlayer from '../multiplayer';
import SingleGame from '../singleGame';

const Stack = createNativeStackNavigator();

function MenuNavigator({}) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false}} />
      <Stack.Screen name="SinglePlayer" component={SinglePlayer} options={{ headerShown: false}} />
      <Stack.Screen name="MultiPlayer" component={MultiPlayer} options={{ headerShown: false}} />
      <Stack.Screen name="SingleGame" component={SingleGame} options={{ headerShown: false}} />
    </Stack.Navigator>
  );
}

export default MenuNavigator;