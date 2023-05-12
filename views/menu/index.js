import React from "react"
import { SafeAreaView, View, Text, Button } from "react-native"
import { auth } from "../../firebase/config";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Menu({ navigation }) {
  const signOut = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <SafeAreaView>
      <Text>Menu</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SinglePlayer')}>
        <Text>singleplayer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MultiPlayer')}>
        <Text>multiplayer</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}>
        <Text>Sign Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}