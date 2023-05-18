import { useState,  } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
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
        "duplicateAccount": false,
        "invalidEmail": false,
        "missingPassword": false,
        "unknownError": false,
      })
      
      if (Object.values(e)[0] === "auth/invalid-email")
        setError(prev => ({...prev, "invalidEmail": true}))
      else if (Object.values(e)[0] === "auth/missing-password")
        setError(prev => ({...prev, "missingPassword": true}))
      else if (Object.values(e)[0] === "auth/email-already-in-use")
        setError(prev => ({...prev, "duplicateAccount": true}))
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
    createUserWithEmailAndPassword(auth, user.name, user.password).then(fulfilled, reject)
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.enterUser} value={user.name} placeholder="Enter your email" onChangeText={e => setUser(prev => ({...prev, "name": e}))} keyboardType='default'/>
      <TextInput style={styles.enterPass} value={user.password} placeholder="Enter your password" onChangeText={e => setUser(prev => ({...prev, "password": e}))} keyboardType='default'/>
      <TouchableOpacity style={styles.signUpButton} onPress={signInWithGoogle}>
        <Text style={styles.signUpButtonText}>Create an Account!</Text>
      </TouchableOpacity>

      <Text style={styles.error}>{error.duplicateAccount ? "Account already exists" : (error.missingPassword ? "Missing password" : (error.invalidEmail ? "Invalid email" : (error.unknownError ? "Error" : "")))}</Text>

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Back to sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
  enterUser: {
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  enterPass: {
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#fff'
  },
  signUpButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  backButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    borderRadius: 5,
  },
  backButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});


export default SignUp;