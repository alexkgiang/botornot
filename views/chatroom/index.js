import React from "react"
import { View, Text, Button } from "react-native"
import { auth } from "../../firebase/config";

export default function ChatRoom({ navigator }) {
  const signOut = async () => {
    try {
      await auth.signOut()
      setSignedIn(false);
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <View>
      <Text>Welcome to the Chat Room!</Text>
      <Button onPress={signOut} title="Sign Out" />
    </View>
  )
}