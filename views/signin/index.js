import { useState,  } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button, StyleSheet } from 'react-native';

function SignUp({ navigation }) {
  const [user, setUser] = useState({"name": "", "password": ""})
  const [error, setError] = useState({
    "duplicateAccount": false,
    "invalidEmail": false,
    "missingPassword": false,
    "unknownError": false,
  })
  const signInWithGoogle = async () => {
    const reject = (e) => {
      setError({
        "wrongPassword": false,
        "invalidEmail": false,
        "missingPassword": false,
        "unknownError": false,
      })
      
      if (Object.values(e)[0] === "auth/invalid-email")
        setError(prev => ({...prev, "invalidEmail": true}))
      else if (Object.values(e)[0] === "auth/missing-password")
        setError(prev => ({...prev, "missingPassword": true}))
      else if (Object.values(e)[0] === "auth/wrong-password")
        setError(prev => ({...prev, "wrongPassword": true}))
      else 
        setError(prev => ({...prev, "unknownError": true}))
    }

    const fulfilled = () => {
      console.log("success")
        setError({
        "duplicateAccount": false,
        "invalidEmail": false,
        "missingPassword": false,
        "unknownError": false,
      })
    }
    signInWithEmailAndPassword(auth, user.name, user.password).then(fulfilled, reject)
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.enterUser} value={user.name} placeholder="Enter your email" onChangeText={e => setUser(prev => ({...prev, "name": e}))} keyboardType='default'/>
      <TextInput style={styles.enterPass} value={user.password} placeholder="Enter your password" onChangeText={e => setUser(prev => ({...prev, "password": e}))} keyboardType='default'/>
      <TouchableOpacity style={styles.signInButton} onPress={signInWithGoogle}>
        <Text style={styles.signInButtonText}>Sign In!</Text>
      </TouchableOpacity>

      <Text style={styles.error}>{error.wrongPassword ? "Wrong Password" : (error.missingPassword ? "Missing password" : (error.invalidEmail ? "Invalid email" : (error.unknownError ? "Some unknown error occurred" : "")))}</Text>
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.signUpButtonText}>Create an Account Instead</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  enterUser: {},
  enterPass: {},
  signInButton: {},
  signInButtonText: {},
  error: {},
  signUpButton: {},
  signUpButtonText: {},
});

export default SignUp;