import { useState,  } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

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
    <SafeAreaView>
      <TextInput value={user.name} placeholder="Enter your email" onChangeText={e => setUser(prev => ({...prev, "name": e}))} keyboardType='default'/>
      <TextInput value={user.password} placeholder="Enter your password" onChangeText={e => setUser(prev => ({...prev, "password": e}))} keyboardType='default'/>
      <TouchableOpacity onPress={signInWithGoogle}>
        <Text>Create an Account!</Text>
      </TouchableOpacity>

      <Text>{error.duplicateAccount ? "Account already exists" : (error.missingPassword ? "Missing password" : (error.invalidEmail ? "Invalid email" : (error.unknownError ? "Error" : "")))}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back to sign in</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;