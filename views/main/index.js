import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ChatRoom from "../chatroom";
import AuthNavigator from '../AuthNavigator';


export default function Main() {
  const user = useAuthState(auth)

  if (!user[0]) {
    return (<AuthNavigator />)
  }

  return (
      <ChatRoom />
  )
}