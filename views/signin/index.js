import { useState,  } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

import { View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

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
    <View>
      <TextInput value={user.name} placeholder="Enter your email" onChangeText={e => setUser(prev => ({...prev, "name": e}))} keyboardType='default'/>
      <TextInput value={user.password} placeholder="Enter your password" onChangeText={e => setUser(prev => ({...prev, "password": e}))} keyboardType='default'/>
      <Button onPress={signInWithGoogle} title='Sign In!' />
        
      <Text>{error.wrongPassword && "Wrong Password"}</Text>
      <Text>{error.missingPassword && "Missing password"}</Text>
      <Text>{error.invalidEmail && "Invalid email"}</Text>
      <Text>{error.unknownError && "Some unknown error occurred"}</Text>
      <Button onPress={() => navigation.goBack()} title="Create an Account Instead" />
    </View>
  );
};

export default SignUp;