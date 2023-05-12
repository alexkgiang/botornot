import { SafeAreaView, View, TouchableOpacity, Text, TextInput, Button } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

function SingleGame() {
  const messageCollection = firestore().collection('messages');
  const query = messageCollection.orderBy('createdAt').limit(25);

  return (
    <SafeAreaView>
      <Text>Game</Text>
    </SafeAreaView>
  );

}

export default SingleGame;