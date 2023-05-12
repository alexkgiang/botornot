import { useState,  } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
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
    <SafeAreaView>
      <TextInput value={user.name} placeholder="Enter your email" onChangeText={e => setUser(prev => ({...prev, "name": e}))} keyboardType='default'/>
      <TextInput value={user.password} placeholder="Enter your password" onChangeText={e => setUser(prev => ({...prev, "password": e}))} keyboardType='default'/>
      <TouchableOpacity onPress={signInWithGoogle}>
        <Text>Sign In!</Text>
      </TouchableOpacity>

      <Text>{error.wrongPassword ? "Wrong Password" : (error.missingPassword ? "Missing password" : (error.invalidEmail ? "Invalid email" : (error.unknownError ? "Some unknown error occurred" : "")))}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text>Create an Account Instead</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SignUp;