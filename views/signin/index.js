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
    backgroundColor: '#f8f8f8'
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
  signInButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3498db',
    borderRadius: 5,
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  error: {
    color: 'red',
    marginBottom: 10
  },
  signUpButton: {
    width: '80%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9b59b6',
    borderRadius: 5,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
});


export default SignUp;