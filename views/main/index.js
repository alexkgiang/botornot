import { React, useState } from 'react';
import { SafeAreaView } from 'react-native';
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignUp from "../createaccount";
import ChatRoom from "../chatroom";
import SignIn from '../signin';

const Stack = createStackNavigator();

export default function Main() {
  const user = useAuthState(auth)
  const [showSignUp, setShowSignUp] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  return (
    <SafeAreaView>
      {user[0] || signedIn ? (
          <ChatRoom setSignedIn={setSignedIn} />
        ) : (
          showSignUp ? (
            <SignUp setShowSignUp={setShowSignUp} />
          ) : (
            <SignIn setShowSignUp={setShowSignUp} />
          )
        )
      }
    </SafeAreaView>
  )
}