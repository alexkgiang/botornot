import React from "react"
import { SafeAreaView, View, Text, Button, StyleSheet } from "react-native"
import { auth } from "../../firebase/config";
import { TouchableOpacity } from "react-native-gesture-handler";

function Menu({ navigation }) {
  const signOut = async () => {
    try {
      await auth.signOut()
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.topText}>Menu</Text>
      <TouchableOpacity style={styles.singleplayer} onPress={() => navigation.navigate('SinglePlayer')}>
        <Text style={styles.singleplayerText}>singleplayer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.multiplayer} onPress={() => navigation.navigate('MultiPlayer')}>
        <Text style={styles.multiplayerText}>multiplayer</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.SignOutButton} onPress={signOut}>
        <Text style={styles.SignOutText}>sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8'
  },
  topText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 30
  },
  singleplayer: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#4B7BEC',
    marginBottom: 20,
  },
  singleplayerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  multiplayer: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#34D399',
    marginBottom: 20,
  },
  multiplayerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  SignOutButton: {
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    backgroundColor: '#F87171'
  },
  SignOutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center'
  },
});


export default Menu;