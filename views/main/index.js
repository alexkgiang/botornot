import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavigationContainer } from '@react-navigation/native';

import SignUp from "../createaccount";
import ChatRoom from "../chatroom";
import SignIn from '../signin';
import AuthNavigator from '../AuthNavigator';


export default function Main() {
  const user = useAuthState(auth)
  const [showSignUp, setShowSignUp] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  return (
    <NavigationContainer>
      <SignIn />
      {/* {user[0] ? <ChatRoom /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
}