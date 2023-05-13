import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

function MultiPlayer({ navigation }) {

  return (
    <SafeAreaView>
      <Text>Multiplayer mode, how to play:</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back to menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

export default MultiPlayer;