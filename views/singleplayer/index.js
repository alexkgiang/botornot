import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';

function SinglePlayer({ navigation }) {

  return (
    <SafeAreaView>
      <Text>Singleplayer mode</Text>
      <TouchableOpacity onPress={() => navigation.navigate('SingleGame')}>
        <Text>start game</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>back to menu</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );

}

export default SinglePlayer;