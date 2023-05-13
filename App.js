import { StatusBar } from 'expo-status-bar';
import Main from "./views/main";

import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
