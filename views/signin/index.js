import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, Text } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/config';

function SignIn({ setShowSignUp }) {
  const [user, setUser] = useState({ email: '', password: '' });
  const [error, setError] = useState({ invalidCredentials: false });

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password);
    } catch (e) {
      setError({ invalidCredentials: true });
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        value={user.email}
        placeholder="Enter your email"
        onChangeText={e => setUser(prev => ({ ...prev, email: e }))}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        value={user.password}
        placeholder="Enter your password"
        onChangeText={e => setUser(prev => ({ ...prev, password: e }))}
        keyboardType="default"
        secureTextEntry={true}
      />
      <Button onPress={signIn} title="Sign In" />
      <Text>{error.invalidCredentials && 'Invalid email or password'}</Text>
      <Button onPress={() => setShowSignUp(true)} title="Create an Account" />
    </SafeAreaView>
  );
}

export default SignIn;
